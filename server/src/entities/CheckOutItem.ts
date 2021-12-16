import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CheckOut } from "./CheckOut";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class CheckOutItem extends BaseEntity{
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Field()
    @Column()
    checkoutId!: string

    @Field(_type => CheckOut)
    @ManyToOne(()=> CheckOut, checkout => checkout.checkOutItem)
    checkout: CheckOut

    @Field()
    @Column()
    productId!: string

    @Field(_type => Product, {nullable : true})
    @OneToOne(()=> Product, product => product.checkOutItem)
    product : Product

    @Field()
    @Column()
    quantity!: number

    @Field()
    @Column()
    size!: number

    @Field()
    @Column()
    color!: string

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date
}