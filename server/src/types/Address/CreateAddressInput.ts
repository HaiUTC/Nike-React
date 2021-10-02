import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAddressInput {
    @Field()
    province : string

    @Field()
    distric : string

    @Field()
    commune : string

    @Field()
    detail : string

    @Field()
    phoneNumber : string
}