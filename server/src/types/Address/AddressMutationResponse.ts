import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "../Response/MutationResponse";
import { FieldError } from "../Response/FieldError";
import { Address } from "../../entities/Address";

@ObjectType({implements : IMutationResponse})
export class AddressMutationResponse implements IMutationResponse{
    code : number
    success : boolean
    message?: string

    @Field({nullable : true})
    address?: Address

    @Field(_type => [Address] ,{nullable : true})
    allAddress?: Address[]

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}