import { User } from "../../entities/User";
import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "../Response/MutationResponse";
import { FieldError } from "../Response/FieldError";

@ObjectType({ implements : IMutationResponse})
export class UserMutationResponse implements IMutationResponse {
    code : number
    success : boolean
    message ?: string

    @Field({nullable : true})
    user?: User

    @Field(__type => [FieldError], {nullable : true})
    errors?: FieldError[]
}