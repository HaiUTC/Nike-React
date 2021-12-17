import { CheckOutItem } from "../../entities/CheckOutItem";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../Response/FieldError";
import { IMutationResponse } from "../Response/MutationResponse";

@ObjectType()
export class CheckOutItemAndState {
    @Field(_type => [CheckOutItem])
    items!: CheckOutItem[]

    @Field(_type => Number)
    stateId!: number

    @Field(_type => Date)
    createdAt : Date

    @Field(_type => Number)
    total!: number
}

@ObjectType({implements : IMutationResponse})
export class CheckOutMutationResponse implements IMutationResponse {
    code ?: number
    success ?: boolean
    message?: string

    @Field(_type => [CheckOutItemAndState] ,{nullable : true})
    all?: CheckOutItemAndState[]

    @Field(_type => [FieldError], {nullable : true})
    errors?:FieldError[]
}
