import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "../Response/MutationResponse";
import { FieldError } from "../Response/FieldError";
import { Product } from "../../entities/Product";

@ObjectType({implements : IMutationResponse})
export class ProductMutationResponse implements IMutationResponse{
    code : number
    success : boolean
    message?: string

    @Field({nullable : true})
    product?: Product

    @Field(_type => [Product] ,{nullable : true})
    products?: Product[]

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}