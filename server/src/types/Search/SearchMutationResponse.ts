import { Product } from "../../entities/Product";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../Response/FieldError";
import { IMutationResponse } from "../Response/MutationResponse";

@ObjectType({implements : IMutationResponse})
export class SearchMutationResponse implements IMutationResponse {
    code : number
    success : boolean
    message?: string

    @Field({defaultValue : 0})
    length?: number

    @Field(_type => [Product] ,{nullable : true})
    products?: Product[]

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}