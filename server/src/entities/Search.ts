import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Search extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    keyword !: string

    @Field()
    @Column()
    number !: number

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date
}