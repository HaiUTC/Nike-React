import { Product } from "../entities/Product";
import { SearchMutationResponse } from "../types/Search/SearchMutationResponse";
import { Arg, Mutation, Resolver } from "type-graphql";
import {Search} from '../entities/Search'
import { ILike } from "typeorm";

@Resolver(_of => Search)
export class SearchResolver {
    @Mutation(_return => SearchMutationResponse)
    async SearchResult(
        @Arg('keyword') keyword : string
    ) : Promise<SearchMutationResponse>{
        try {
            let products : Product[] = []
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

            products = await (Product).find({
                where :[
                    { name : ILike(`%${keyword}%`)},
                    { title : ILike(`%${keyword}%`)},
                    { labelSpecial : ILike(`%${keyword}%`)},
                    
                ]
            })

            return{
                code : 200,
                success : true,
                message : 'Find product....',
                length : products.length || 0,
                products 
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in SearchResult : ${error.message}`,   
            }
        }
    }
}