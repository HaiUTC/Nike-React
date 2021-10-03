import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartItem } from "./CartItem";
import { User } from "./User";

@ObjectType()
@Entity()
export class Cart extends BaseEntity{
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Field()
    @Column()
    userId!: number

    @OneToOne(()=> User, user => user.cart)
    user : User

    @Field()
    @Column({default : 0})
    total : number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date

    @OneToMany(()=> CartItem, cartItem => cartItem.cart)
    cartItem : CartItem[]
}