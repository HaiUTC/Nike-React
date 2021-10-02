import { Field, ID, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm";
import { Cart } from "./Cart";

@ObjectType()
@Entity()
export class CartItem{
    @Field(_type => ID)
    @Column()
    id!: number

    @ManyToOne(()=> Cart, cart => cart.cartItem)
    cart: Cart

    @Field()
    @Column()
    productId!: string

    @Field()
    @Column()
    size!: number

    @Field()
    @Column()
    quantity!: number

    @Field()
    @Column()
    color: string

    @Field({nullable : true})
    @Column({nullable : true})
    discount?:number

    @Field()
    @Column()
    money : number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date
}