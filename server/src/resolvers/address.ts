import { Address } from "../entities/Address";
import { Arg, Ctx, FieldResolver, ID, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { User } from "../entities/User";
import { AddressMutationResponse } from "../types/Address/AddressMutationResponse";
import { CreateAddressInput } from "../types/Address/CreateAddressInput";
import { Context } from "../types/Context/Context";
import { checkAuthUser } from "../middleware/checkAuth";
import { UpdateAddressInput } from "../types/Address/UpdateAddressInput";

@Resolver(_of => Address)
export class AddressResolver {

    @FieldResolver(_return => User)
    async user(
        @Root() root: Address,
        @Ctx() {dataLoaders : {userLoader}} : Context
    ){
        return await userLoader.load(root.userId)
    }

    @Mutation(_return => AddressMutationResponse)
    @UseMiddleware(checkAuthUser)
    async CreateAddress(
        @Arg('createAddressInput') {province,distric,commune,detail,phoneNumber} : CreateAddressInput,
        @Ctx() {req}: Context
    ):Promise<AddressMutationResponse>{
        try {
            const newAddress = Address.create({
                userId : req.session.userId,
                province,
                distric,
                commune,
                detail,
                phoneNumber
            })
            await newAddress.save()
            return {
                code : 200,
                success : true,
                message : 'Address created successfully',
                address : newAddress
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in CreateAddress : ${error.message}`,
                
            }
        }
    }

    @Query(_return => AddressMutationResponse,{nullable : true})
    @UseMiddleware(checkAuthUser)
    async GetAllAddress(
        @Ctx() {req} : Context
    ):Promise<AddressMutationResponse | null>{
        try {
            const listAddress = await Address.find({userId: req.session.userId})
            return {
                code : 200,
                success : true,
                message : 'Get address successfully',
                allAddress : listAddress
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in GetAllAddress : ${error.message}`,   
            }
        }
    }

    @Query(_return => Address,{nullable : true})
    @UseMiddleware(checkAuthUser)
    async GetAddressId(
        @Arg('id', _type => ID) id : number 
    ):Promise<Address | undefined>{
        try {
            return await Address.findOne(id)
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    @Mutation(_return => AddressMutationResponse,{nullable : true})
    @UseMiddleware(checkAuthUser)
    async UpdateAddress(
        @Arg('updateAddressInput') {id,province,distric,commune,detail,phoneNumber} : UpdateAddressInput,
        @Ctx() {req} : Context
    ):Promise<AddressMutationResponse | null>{
        try {
            const existingAddress = await Address.findOne(id)
            if(!existingAddress)
                return{
                    code : 400,
                    success : false,
                    message : 'Address not found'
                }
            if(existingAddress.userId !== req.session.userId)
                return {
                    code : 401,
                    success : false,
                    message : 'Unauthorized'
                }
            existingAddress.province = province??existingAddress.province
            existingAddress.distric = distric??existingAddress.distric
            existingAddress.commune = commune??existingAddress.commune
            existingAddress.detail = detail??existingAddress.detail
            existingAddress.phoneNumber = phoneNumber??existingAddress.phoneNumber
            await existingAddress.save()

            return {
                code : 200,
                success : true,
                message : 'Address updated successfully',
                address : existingAddress
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in UpdateAddress : ${error.message}`,
                
            }
        }
    }

    @Mutation(_return => AddressMutationResponse,{nullable : true})
    @UseMiddleware(checkAuthUser)
    async DeleteAddress(
        @Arg('id', _type => ID) id : number,
        @Ctx() {req} : Context
    ): Promise<AddressMutationResponse>{
        try {
            const existingAddress = await Address.findOne(id)
            if(!existingAddress)
                return{
                    code : 400,
                    success : false,
                    message : 'Address not found'
                }
            if(existingAddress.userId !== req.session.userId)
                return {
                    code : 401,
                    success : false,
                    message : 'Unauthorized'
                }
            await Address.delete({id})
            return {
                code : 200,
                success : true,
                message : 'Address deleted successfully',
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in DeleteAddress : ${error.message}`,             
            }
        }
    }
}