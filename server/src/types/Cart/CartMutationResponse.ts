import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "../Response/MutationResponse";
import { FieldError } from "../Response/FieldError";
import { Cart } from "../../entities/Cart";

@ObjectType({implements : IMutationResponse})
export class CartMutationResponse implements IMutationResponse{
    code : number
    success : boolean
    message?: string

    @Field({nullable : true})
    cart?: Cart

    @Field(_type => [Cart] ,{nullable : true})
    allCart?: Cart[]

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}