import { CheckOut } from "../entities/CheckOut";
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { CheckOutItem } from "../entities/CheckOutItem";
import {IMutationResponsePrimary} from '../types/Response/MutationResponsePrimary'
import { checkAuthUser } from "../middleware/checkAuth";
import { Context } from "../types/Context/Context";
import { CheckOutInput } from "../types/CheckOut/CheckOutInput";
import { CheckOutItemAndState, CheckOutMutationResponse } from "../types/CheckOut/CheckOutResponse";
import { Address } from "../entities/Address";

@Resolver(_of => CheckOut)
export class CheckOutResolver {
    @FieldResolver(_return => [CheckOutItem], {nullable : true})
    async checkOutItems(@Root() root: CheckOut){
        return await CheckOutItem.find({checkoutId : root.id})
    }

    @Mutation(_return => IMutationResponsePrimary)
    @UseMiddleware(checkAuthUser)
    async CheckOut(
        @Arg('checkOutInput') {product,discount : _discount, total,address, addressId}:CheckOutInput,
        @Ctx() {req} : Context
    ):Promise<IMutationResponsePrimary>{
        try {
            if(addressId === null){
                const newAddress = await Address.create({
                    userId : address?.save === true ? req.session.userId : undefined,
                    province : address?.province,
                    distric: address?.distric,
                    commune: address?.commune,
                    detail : address?.detail,
                    phoneNumber : address?.phoneNumber
                }).save()


                if(newAddress.id !== null){
                    const existingCheckOut = await CheckOut.create({
                        userId : req.session.userId,
                        total,
                        addressId :  newAddress.id
                    }).save()
                    if(existingCheckOut.id !== null){
                        product.map( async (pro) => {
                            await CheckOutItem.create({
                                checkoutId : existingCheckOut.id,
                                productId : pro.productId,
                                size : pro.size,
                                quantity : pro.quantity,
                                color : pro.color
                            })
                            .save();
                        })
                }
            }
        }
        else if(addressId !== null){
            const existingCheckOut = await CheckOut.create({
                userId : req.session.userId,
                total,
                addressId :  addressId
            }).save()
            if(existingCheckOut.id !== null){
                product.map( async (pro) => {
                    await CheckOutItem.create({
                        checkoutId : existingCheckOut.id,
                        productId : pro.productId,
                        size : pro.size,
                        quantity : pro.quantity,
                        color : pro.color
                    })
                    .save();
                })
        }
        }
            return {
                code : 200,
                success : true,
                message : 'Check out successfully.',    
            }

        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in CheckOut : ${error.message}`,    
            }
        }
    }

    @Query(_return => CheckOutMutationResponse)
    @UseMiddleware(checkAuthUser)
    async getOrder(
        @Arg('stateId', {nullable : true}) stateId: number,
        @Ctx() {req} : Context
    ): Promise<CheckOutMutationResponse | undefined>{
        try {
            console.log("Stateid : ",stateId)
            let where 
            if(stateId === 0) where = {userId : req.session.userId}
            else where = {userId : req.session.userId, stateId}
            const checkOutUser = await CheckOut.find({where})
            if(!checkOutUser) {
                return {
                    code : 500,
                    success : false,
                    message : 'False'
                }
            }
            else{
                const allCheckOut:CheckOutItemAndState[] = await Promise.all(checkOutUser.map(( async (item) => { 
                    return {
                        total : item.total,
                        createdAt : item.createdAt,
                        stateId : item.stateId,
                        items : await CheckOutItem.find({checkoutId : item.id}) 
                    }
                })))
                return {
                    code : 200,
                    success : true,
                    message : 'lew lew',
                    all: allCheckOut
                }
            }
            return undefined
            
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in CheckOut : ${error.message}`,    
            }
        }
    }

}