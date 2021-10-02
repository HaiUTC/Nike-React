import { Category } from "../entities/Category";
import { Arg, Ctx, ID, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { CategoryMutationResponse } from "../types/Category/CategoryMutationResponse"
import { Context } from "../types/Context/Context";
import { checkAuthAdmin } from "../middleware/checkAuth";

@Resolver(_of => Category)
export class CategoryResolver{
    
    @Query(_return => Category,{nullable : true})
    async GetCategoryId(
        @Arg('id', _type => ID) id : number 
    ):Promise<Category | undefined>{
        try {
            return await Category.findOne(id)
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    @Query(_return => CategoryMutationResponse,{nullable : true})
    async GetAllcategory():Promise<CategoryMutationResponse | null>{
        try {
            const listCategory = await Category.find()
            return {
                code : 200,
                success : true,
                message : 'Get Category successfully',
                allCategory : listCategory
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong : ${error.message}`,   
            }
        }
    }

    @Mutation(_return => CategoryMutationResponse)
    @UseMiddleware(checkAuthAdmin)
    async AddCategory(
        @Arg('name') name : string,
        @Arg('collectionId') collectionId : number,
        @Ctx() {req} : Context
    ):Promise<CategoryMutationResponse>{
        try {
            const newCategory = Category.create({
                name,
                collectionId,
                updatedBy : req.session.userId
            })
            await newCategory.save()
            return {
                code : 200,
                success : true,
                message : 'Category created successfully',
                Category : newCategory
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong : ${error.message}`
            }
        }
    }

    @Mutation(_return => CategoryMutationResponse)
    @UseMiddleware(checkAuthAdmin)
    async UpdateCategory(
        @Arg('name') name : string,
        @Ctx() {req} : Context
    ):Promise<CategoryMutationResponse>{
        try {
            const existingCategory = await Category.findOne({name})
            if(!existingCategory)
                return{
                    code : 400,
                    success : false,
                    message : 'Category not found'
                }
            existingCategory.name = name
            existingCategory.updatedBy = req.session.userId
            await existingCategory.save()
            return {
                code : 200,
                success : true,
                message : 'Category created successfully',
                Category : existingCategory
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong : ${error.message}`
            }
        }
    }

    @Mutation(_return => CategoryMutationResponse,{nullable : true})
    @UseMiddleware(checkAuthAdmin)
    async DeleteCategory(
        @Arg('id', _type => ID) id : number,
    ): Promise<CategoryMutationResponse>{
        try {
            const existingCategory = await Category.findOne(id)
            if(!existingCategory)
                return{
                    code : 400,
                    success : false,
                    message : 'Category not found'
                }
            await Category.delete({id})
            return {
                code : 200,
                success : true,
                message : 'Category deleted successfully',
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong : ${error.message}`,             
            }
        }
    }
}