import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartItem } from "./CartItem";
import { User } from "./User";

@ObjectType()
@Entity()
export class CheckOut extends BaseEntity{
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Field(_type =>ID)
    @Column()
    userId : number

    @OneToOne(()=> User, user => user.cart)
    user : User

    @OneToMany(()=> CartItem, cartItem => cartItem.checkout)
    cartItem : CartItem

    @Field()
    @Column('decimal')
    total : number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date
}