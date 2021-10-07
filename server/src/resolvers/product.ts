import { Arg, FieldResolver, ID, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { LessThan } from "typeorm";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { checkAuthAdmin } from "../middleware/checkAuth";
import { ProductMutationResponse } from "../types/Product/ProductMutationResponse";
import { ProductInput } from "../types/Product/ProductInput";
import { PaginatedProductResponse } from "../types/Product/PaginatedProductResponse";
import { ProductUpdateInput } from '../types/Product/ProductUpdateInput'

@Resolver(_of => Product)
export class ProductResolver {

    @FieldResolver(_return => Category)
	async category(
		@Root() root: Product
	) {
		return await Category.findOne(root.categoryId)
	}

    @Query(_return => PaginatedProductResponse, {nullable : true})
    async GetProductByCategoryAndCollection(
        @Arg('categoryId',_type=> ID) categoryId : number,
        @Arg('cursor', { nullable: true }) cursor?: string,
        @Arg('sort', {nullable : true}) sort?: string,
        @Arg('title',{nullable : true}) title?: string,
    ):Promise<PaginatedProductResponse | undefined>{
        try {
            const limit = 9
            let order = {}
            let where = {}
            if(title!==undefined) where = {categoryId,title}
            else where = {categoryId}
            const totalCount = await Product.count({categoryId})
            if(sort==='time') order =  {createdAt: 'DESC'}
            else if (sort==='priceAsc') order = {price: 'ASC'}
            else if(sort==='priceDesc') order = {price: 'DESC'}
            else order = {rating: 'DESC'}
            const findOptions: { [key: string]: any } = {
				order,
				take: limit,
                where
			}
            let lastProduct: Product[] = []
			if (cursor) {
				findOptions.where = { createdAt: LessThan(cursor) }
				lastProduct = await Product.find({ order, take: 1,where })
			}
            const listProduct = await Product.find(findOptions)
            return {
                totalCount,
                cursor: listProduct[listProduct.length-1].createdAt,
                hasMore : cursor
                ? listProduct[listProduct.length - 1].createdAt.toString() !==
                  lastProduct[0].createdAt.toString()
                : listProduct.length !== totalCount,
                paginatedProducts : listProduct
            }
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    @Query(_return => Product, {nullable : true})
    async GetProductId(
        @Arg('id') id : string
    ):Promise<Product | undefined>{
        try {
            return await Product.findOne(id)
        } catch (error) {
            console.log(error)
            return undefined
        }
        
    }

    @Mutation(_return => ProductMutationResponse, {nullable : true})
    @UseMiddleware(checkAuthAdmin)
    async CreateProduct(
        @Arg('productInput') {name,title,labelSpecial,price,categoryId,size,numberColor,picture ,poster,description,percentSale,timerSale} : ProductInput
    ): Promise<ProductMutationResponse>{
        try {
            const existingProduct = await Product.findOne({
                where : {name,categoryId,price}
            })
            if(existingProduct)
                return {
                    code : 400,
                    success : false,
                    message : 'Product has existed. Please choose another product',
                    errors : [
                        {
                            field : "Product",
                            message : 'Product already exists'
                        }
                    ]
                }
            const newProduct = Product.create({name, title, labelSpecial, price, size, numberColor,categoryId, picture, poster, description, percentSale, timerSale})
            await newProduct.save()
            return {
                code : 200,
                success : true,
                message : 'Product created successfully',
                product : newProduct
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in CreateProduct : ${error.message}`
            }
        }
    }
    //Sale --TODO
    @Mutation(_return => ProductMutationResponse, {nullable : true})
    @UseMiddleware(checkAuthAdmin)
    async UpdateProduct(
        @Arg('productInput') {id,name,title,labelSpecial,price,picture,description,percentSale,timerSale} : ProductUpdateInput
    ): Promise<ProductMutationResponse>{
        try {
            const existingProduct = await Product.findOne(id)
            if(!existingProduct)
                return {
                    code : 400,
                    success : false,
                    message : 'Product has existed. Please choose another product',
                    errors : [
                        {
                            field : "Product",
                            message : 'Product already exists'
                        }
                    ]
                }
            existingProduct.name = name??existingProduct.name
            existingProduct.title = title??existingProduct.title
            existingProduct.labelSpecial = labelSpecial??existingProduct.labelSpecial
            existingProduct.price = price??existingProduct.price
            existingProduct.picture = picture??existingProduct.picture
            existingProduct.description = description??existingProduct.description
            existingProduct.percentSale = percentSale??existingProduct.percentSale
            existingProduct.timerSale = timerSale??existingProduct.timerSale
            await existingProduct.save()
            return {
                code : 200,
                success : true,
                message : 'Update product successfully',
                product : existingProduct
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in UpdateProduct : ${error.message}`
            }
        }
    }

    @Mutation(_return => ProductMutationResponse)
    @UseMiddleware(checkAuthAdmin)
    async DeleteProduct(
        @Arg('id', _type => ID) id : string
    ):Promise<ProductMutationResponse>{
        try {
            const existingProduct = await Product.findOne(id)
            if(!existingProduct)
                return {
                    code : 400,
                    success : false,
                    message : 'Product has existed. Please choose another product',
                    errors : [
                        {
                            field : "Product",
                            message : 'Product already exists'
                        }
                    ]
                }
            
            await Product.delete(id)
            return {
                code : 200,
                success : true,
                message : 'Update product successfully',
                product : existingProduct
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in DeleteProduct : ${error.message}`,
                
            }
        }
    }
}