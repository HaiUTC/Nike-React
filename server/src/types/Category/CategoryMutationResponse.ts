import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "../Response/MutationResponse";
import { FieldError } from "../Response/FieldError";
import { Category } from "../../entities/Category";

@ObjectType({implements : IMutationResponse})
export class CategoryMutationResponse implements IMutationResponse{
    code : number
    success : boolean
    message?: string

    @Field({nullable : true})
    Category?: Category

    @Field(_type => [Category] ,{nullable : true})
    allCategory?: Category[]

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}