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
export class AddressCheckOut{
    @Field(_type => String)
    province!: string

    @Field(_type => String)
    distric!: string

    
    @Field(_type => String)
    commune!: string

    @Field(_type => String)
    detail!: string

    @Field(_type => String)
    phoneNumber!: string

    @Field(_type => Boolean)
    save!: boolean
}


@InputType()
export class CheckOutInput {
    @Field(() => [ProductCheckOut])
    product : ProductCheckOut[]

    @Field({defaultValue : 0})
    discount: number

    @Field()
    total!: number

    //have address
    @Field({nullable : true})
    addressId?: number

    //not have address

    @Field(() => AddressCheckOut, {nullable : true})
    address?: AddressCheckOut


   

}