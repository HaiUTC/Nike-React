import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CheckOutItem } from "./CheckOutItem";
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

    @Field()
    @Column('decimal',{default : 0})
    total : number

    @Field()
    @Column({default : 1})
    stateId : number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date

    @OneToMany(()=> CheckOutItem, checkOutItem => checkOutItem.checkout)
    checkOutItem : CheckOutItem[]
}