import { Field, InputType } from "type-graphql";


@InputType()
export class ProductCheckOut {
    @Field(_type => String)
    productId!: string


    @Field(_type => String)
    color!: string

    @Field(_type => Number)
    quantity!: number

    @Field(_type => Number)
    size!: number
}


@InputType()
export class CheckOutInput {
    @Field(() => [ProductCheckOut])
    product : ProductCheckOut[]

    @Field({defaultValue : 0})
    discount: number

    @Field()
    total!: number
}