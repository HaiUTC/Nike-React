import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
    @Field()
    firstName : string

    @Field()
    lastName : string

    @Field()
    email : string

    @Field()
    password : string

    @Field()
    gender : string

    @Field()
    dob : string
    
}