import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartItem } from "./CartItem";
import { Category } from "./Category";

@ObjectType()
export class Picture {
    @Field(_type => [String])
    url!: string[]

    @Field(_type => String,{nullable : true})
    color!: string
}

@ObjectType()
export class ItemPicture {
    @Field(_type => String)
    url!: string

    @Field(_type => String)
    color!: string
}

@ObjectType()
@Entity()
export class Product extends BaseEntity{
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: number

    @Field()
    @Column()
    categoryId!: number

    @Field()
    @Column()
    name!: string

    @Field()
    @Column()
    title!: string

    @Field({nullable : true})
    @Column({default : null,nullable : true})
    labelSpecial : string

    @Field()
    @Column()
    price!: number

    @Field(() => [Number])
    @Column("float", { array: true, default: {} })
    size!: number[]

    @Field()
    @Column()
    numberColor!: number

    @Field(() => ItemPicture)
    @Column({type : 'json'})
    picture!: ItemPicture

    @Field(() => [Picture])
    @Column({type : 'json'})
    poster!: Picture[]

    @Field()
    @Column()
    description!: string

    @Field({nullable : true})
    @Column({nullable : true})
    percentSale?: number

    @Field({nullable : true})
    @Column({nullable : true})
    timerSale: Date

    @Field()
    @Column({default : 0,nullable : true})
    numberReview: number

    @Field()
    @Column({ default : 0,nullable : true})
    rating: number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date

    @Field(_type => Category)
    @ManyToOne(() => Category, category => category.product)
    category: Category

    @Field(_type => CartItem)
    @OneToOne(()=> CartItem, cartItem => cartItem.product)
    cartItem : CartItem
}

