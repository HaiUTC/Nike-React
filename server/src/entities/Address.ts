import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CheckOut } from "./CheckOut";
import { User } from "./User";

@ObjectType()
@Entity()
export class Address extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field({nullable : true})
    @Column({nullable : true})
    userId?: number

    @Field(_type => User)
    @ManyToOne(()=> User, user => user.addresses)
    user : User

    @Field()
    @Column()
    province!: string

    @Field()
    @Column()
    distric!: string

    @Field()
    @Column()
    commune!: string

    @Field()
    @Column()
    detail!: string

    @Field({nullable : true})
    @Column({nullable : true})
    phoneNumber : string

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date

    @OneToOne(()=> CheckOut, checkout => checkout.address)
    checkout : CheckOut
}