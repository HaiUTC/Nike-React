import { CheckOut } from "../entities/CheckOut";
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { CheckOutItem } from "../entities/CheckOutItem";
import {IMutationResponsePrimary} from '../types/Response/MutationResponsePrimary'
import { checkAuthUser } from "../middleware/checkAuth";
import { Context } from "../types/Context/Context";
import { CheckOutInput } from "../types/CheckOut/CheckOutInput";
import { CheckOutItemAndState, CheckOutMutationResponse } from "../types/CheckOut/CheckOutResponse";

@Resolver(_of => CheckOut)
export class CheckOutResolver {
    @FieldResolver(_return => [CheckOutItem], {nullable : true})
    async checkOutItems(@Root() root: CheckOut){
        return await CheckOutItem.find({checkoutId : root.id})
    }

    @Mutation(_return => IMutationResponsePrimary)
    @UseMiddleware(checkAuthUser)
    async CheckOut(
        @Arg('checkOutInput') {product,discount : _discount, total}:CheckOutInput,
        @Ctx() {req} : Context
    ):Promise<IMutationResponsePrimary>{
        try {
            const existingCheckOut = await CheckOut.create({
                userId : req.session.userId,
                total 
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
            let where 
            if(stateId === 0) where = {userId : req.session.userId}
            else where = [{userId : req.session.userId},stateId]
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