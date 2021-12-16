import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./FieldError";
import { IMutationResponse } from "./MutationResponse";

@ObjectType({implements : IMutationResponse})
export class IMutationResponsePrimary implements IMutationResponse{
    code : number
    success : boolean
    message?: string

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}