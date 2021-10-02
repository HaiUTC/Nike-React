import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Collection } from "./Collection";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    name!: string

    @Field()
    @Column()
    collectionId!: number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date

    @Field()
    @Column()
    updatedBy?: number

    @ManyToOne(()=> Collection, collection => collection.category)
    collection : Collection

    @OneToMany(()=> Product, product => product.category)
    product : Product[]

}