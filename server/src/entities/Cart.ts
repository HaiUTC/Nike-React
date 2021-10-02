import { Field, ID, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartItem } from "./CartItem";

@ObjectType()
@Entity()
export class Cart{
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: number

    @Field()
    @Column()
    userId!: number

    @Field()
    @Column()
    total : number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date

    @OneToMany(()=> CartItem, cartItem => cartItem.cart)
    cartItem : CartItem
}