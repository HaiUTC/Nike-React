import { Field, InputType } from "type-graphql";

@InputType()
export class ChangePasswordInput{

    @Field()
    currentPassword : string

    @Field()
    newPassword : string

    @Field()
    confirmNewPassword : string
}