import { Role } from "../types/Response/Role";
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Address";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    name!: string

    @Field()
    @Column({unique: true})
    email!: string

    @Column()
    password!: string

    @Field()
    @Column({type :"enum",enum : Role, default : Role.User})
    role: Role

    @Field()
    @Column()
    gender!: string

    @Column()
    dob!: string

    @Field()
    @Column({default : 'https://drive.google.com/file/d/1AWoyHuA2aB7ayOsBy0B-gN_iotX0khuZ/view?usp=sharing'})
    avatar: string

    @OneToMany(() => Address, address => address.user)
    addresses : Address[]

    // @OneToMany(() => Cart, cart => cart.user)
    // carts : Cart[]

    // @OneToMany(()=> Checkout, checkout => checkout.user)
    // checkouts : Checkout[]

    // @OneToMany(() => Comment, comment => comment.user)
    // comments : Comment[]

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date
}

 