import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UpdateAddressInput{
    @Field(_type => ID)
    id?: number

    @Field({nullable : true})
    province?: string

    @Field({nullable : true})
    distric?: string

    @Field({nullable : true})
    commune?: string

    @Field({nullable : true})
    detail?: string

    @Field({nullable : true})
    phoneNumber?: string
}