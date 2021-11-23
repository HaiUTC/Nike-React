import { Product } from "../entities/Product";
import { Arg, Int, Query, Resolver } from "type-graphql";
import {Search} from '../entities/Search'
import { ILike, LessThan } from "typeorm";
import { PaginatedProductResponse } from "../types/Product/PaginatedProductResponse";

@Resolver(_of => Search)
export class SearchResolver {
    @Query(_return => PaginatedProductResponse)
    async SearchResult(
        @Arg('limit', _type => Int, {nullable : true}) limit?: number,
        @Arg('keyword') keyword?: string,
        @Arg('cursor', { nullable: true }) cursor?: string,
    ) : Promise<PaginatedProductResponse | undefined>{
        try {
            let order = {createdAt: 'DESC'}
            const totalCount =await Product.count({
                where :[
                    { name : ILike(`%${keyword}%`)},
                    { title : ILike(`%${keyword}%`)},
                    { labelSpecial : ILike(`%${keyword}%`)},
                    
                ],
            })
            let findOptions: { [key: string]: any } = {
                order,
                where :[
                    { name : ILike(`%${keyword}%`)},
                    { title : ILike(`%${keyword}%`)},
                    { labelSpecial : ILike(`%${keyword}%`)}, 
                ],
				take: limit||9,
			}
            const existingKeywordSearch = await Search.findOne({keyword: keyword})
            if(!existingKeywordSearch){
                const newKey = Search.create({
                    keyword,
                    number : 1
                })
                await newKey.save()
            }
            else{
                existingKeywordSearch.number += 1;
                await existingKeywordSearch.save()
            }

            let lastProduct: Product[] = []
			if (cursor) {
				findOptions.where = {
                        createdAt: LessThan(cursor)
                }
				lastProduct = await Product.find({ 
                    where :[
                        { name : ILike(`%${keyword}%`)},
                        { title : ILike(`%${keyword}%`)},
                        { labelSpecial : ILike(`%${keyword}%`)}, 
                    ],
                    order : {createdAt : 'ASC'}, 
                    take: 1})
			}
            const products = await Product.find(findOptions)

            return {
                totalCount : totalCount,
                cursor: products[products.length-1].createdAt,
                hasMore : cursor
                ? products[products.length - 1].createdAt.toString() !== lastProduct[0]?.createdAt.toString()
                : products.length !== totalCount,
                paginatedProducts : products
            }
           
        } catch (error) {
            console.log(error)
            return undefined
        }
    }
}