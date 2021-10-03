import { Field, InputType } from "type-graphql";


@InputType()
export class CartInput{
    @Field()
    productId : string

    @Field()
    size : number

    @Field()
    color : string

    @Field({defaultValue : 0})
    discount: number

}