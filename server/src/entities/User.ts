import { Role } from "../types/Response/Role";
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Address";
import { Cart } from "./Cart";
import { Comment } from "./Comment";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({nullable : true})
    first_name: string

    @Field()
    @Column({nullable : true})
    last_name: string

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

    @Field({nullable : true})
    @Column({nullable : true})
    home_town!: string

    @Field({nullable : true})
    @Column({nullable : true})
    about_me!: string

    @Field()
    @Column({default : 'https://drive.google.com/file/d/1AWoyHuA2aB7ayOsBy0B-gN_iotX0khuZ/view?usp=sharing'})
    avatar: string

    @OneToMany(() => Address, address => address.user)
    addresses : Address[]

    @OneToOne(() => Cart, cart => cart.user)
    cart : Cart

    // @OneToMany(()=> Checkout, checkout => checkout.user)
    // checkouts : Checkout[]

    @OneToMany(() => Comment, comment => comment.user)
    comments : Comment[]

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date
}

 