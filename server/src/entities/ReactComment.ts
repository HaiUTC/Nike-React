import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class ReactComment extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Field()
    @Column()
    userId!: number

    @Field()
    @Column()
    commentId!: string

    @Field({defaultValue : 0})
    @Column({default : 0})
    value!: number
    //1-like 0-null -1-dislike
} 