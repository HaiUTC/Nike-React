import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cart } from "./Cart";
import { CheckOut } from "./CheckOut";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class CartItem extends BaseEntity{
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: number

    @Field()
    @Column()
    cartId : string

    @Field(_type => Cart)
    @ManyToOne(()=> Cart, cart => cart.cartItem)
    cart: Cart

    @ManyToOne(()=> CheckOut, checkout => checkout.cartItem)
    checkout: CheckOut

    @Field()
    @Column()
    productId : string

    @Field(_type => Product, {nullable : true})
    @OneToOne(()=> Product, product => product.cartItem)
    product : Product

    @Field()
    @Column()
    size!: number

    @Field()
    @Column({default : 0})
    quantity: number

    @Field()
    @Column()
    color: string

    @Field()
    @Column({default : 0})
    discount:number

    @Field()
    @Column()
    monney : number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date
}