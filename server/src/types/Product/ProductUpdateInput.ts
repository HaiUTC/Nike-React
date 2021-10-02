import { Field, InputType } from "type-graphql";

@InputType()
export class PictureUpdateInput {
    @Field(_type => [String])
    url!: string[]

    @Field(_type => String)
    color!: string
}

@InputType()
export class ItemPictureUpdateInput {
    @Field(_type => String)
    url!: string

    @Field(_type => String)
    color!: string
}

@InputType()
export class ProductUpdateInput{
    @Field({nullable : true})
    id?: string

    @Field({nullable : true})
    name?: string

    @Field({nullable : true})
    title?: string

    @Field({nullable : true})
    categoryId?: number

    @Field({nullable : true})
    labelSpecial?: string

    @Field({nullable : true})
    price?: number

    @Field(()=> [Number],{nullable : true})
    size?: number[]

    @Field({nullable : true})
    numberColor?: number

    @Field(()=> ItemPictureUpdateInput,{nullable : true})
    picture?: ItemPictureUpdateInput

    @Field(()=> [PictureUpdateInput],{nullable : true})
    poster?: PictureUpdateInput[]

    @Field({nullable : true})
    description?: string

    @Field({nullable : true})
    percentSale ?: number
    
    @Field({nullable : true})
    timerSale ?: Date


}