import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "../Response/MutationResponse";
import { FieldError } from "../Response/FieldError";
import { Collection } from "../../entities/Collection";

@ObjectType({implements : IMutationResponse})
export class CollectionMutationResponse implements IMutationResponse{
    code : number
    success : boolean
    message?: string

    @Field({nullable : true})
    Collection?: Collection

    @Field(_type => [Collection] ,{nullable : true})
    allCollection?: Collection[]

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}