import { Arg, Ctx, ID, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { Collection } from "../entities/Collection";
import { CollectionMutationResponse } from "../types/Collection/CollectionMutationResponse"
import { Context } from "../types/Context/Context";
import { checkAuthAdmin } from "../middleware/checkAuth";

@Resolver(_of => Collection)
export class CollectionResolver{

    @Query(_return => Collection,{nullable : true})
    async GetCollectionId(
        @Arg('id', _type => ID) id : number 
    ):Promise<Collection | undefined>{
        try {
            return await Collection.findOne(id)
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    @Query(_return => CollectionMutationResponse,{nullable : true})
    async GetAllCollection():Promise<CollectionMutationResponse | null>{
        try {
            const listCollection = await Collection.find()
            return {
                code : 200,
                success : true,
                message : 'Get collection successfully',
                allCollection : listCollection
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in GetAllCollection : ${error.message}`,   
            }
        }
    }

    @Mutation(_return => CollectionMutationResponse)
    @UseMiddleware(checkAuthAdmin)
    async AddCollection(
        @Arg('name') name : string,
        @Ctx() {req} : Context
    ):Promise<CollectionMutationResponse>{
        try {
            const newCollection = Collection.create({
                name,
                updatedBy : req.session.userId
            })
            await newCollection.save()
            return {
                code : 200,
                success : true,
                message : 'Collection created successfully',
                Collection : newCollection
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in AddCollection : ${error.message}`
            }
        }
    }

    @Mutation(_return => CollectionMutationResponse)
    @UseMiddleware(checkAuthAdmin)
    async UpdateCollection(
        @Arg('name') name : string,
        @Ctx() {req} : Context
    ):Promise<CollectionMutationResponse>{
        try {
            const existingCollection = await Collection.findOne({name})
            if(!existingCollection)
                return{
                    code : 400,
                    success : false,
                    message : 'Collection not found'
                }
            existingCollection.name = name
            existingCollection.updatedBy = req.session.userId
            await existingCollection.save()
            return {
                code : 200,
                success : true,
                message : 'Collection created successfully',
                Collection : existingCollection
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in UpdateCollection : ${error.message}`
            }
        }
    }

    @Mutation(_return => CollectionMutationResponse,{nullable : true})
    @UseMiddleware(checkAuthAdmin)
    async DeleteCollection(
        @Arg('id', _type => ID) id : number,
    ): Promise<CollectionMutationResponse>{
        try {
            const existingCollection = await Collection.findOne(id)
            if(!existingCollection)
                return{
                    code : 400,
                    success : false,
                    message : 'Collection not found'
                }
            await Collection.delete({id})
            return {
                code : 200,
                success : true,
                message : 'Collection deleted successfully',
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in DeleteCollection : ${error.message}`,             
            }
        }
    }
}