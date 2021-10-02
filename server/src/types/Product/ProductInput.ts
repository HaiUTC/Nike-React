import { Field, InputType } from "type-graphql";

@InputType()
export class PictureInput {
    @Field(_type => [String])
    url!: string[]

    @Field(_type => String)
    color!: string
}

@InputType()
export class ItemPictureInput {
    @Field(_type => String)
    url!: string

    @Field(_type => String)
    color!: string
}

@InputType()
export class ProductInput{
    @Field()
    name : string

    @Field()
    title : string

    @Field()
    categoryId: number

    @Field({nullable : true})
    labelSpecial?: string

    @Field()
    price : number

    @Field(()=> [Number])
    size : number[]

    @Field()
    numberColor : number

    @Field(()=> ItemPictureInput)
    picture : ItemPictureInput

    @Field(()=> [PictureInput])
    poster : PictureInput[]

    @Field()
    description : string

    @Field({nullable : true})
    percentSale ?: number
    
    @Field({nullable : true})
    timerSale ?: string


}