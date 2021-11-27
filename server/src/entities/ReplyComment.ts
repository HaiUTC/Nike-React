import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./Comment";

@ObjectType()
@Entity()
export class ReplyComment extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: number

    @Field()
    @Column()
    commentId!: number

    @Field()
    @Column()
    userId!: number

    @Field()
    @Column()
    content!: string

    @Field()
    @Column({default : 0})
    like?: number

    @Field()
    @Column({default : 0})
    dislike?: number


    @Field({ defaultValue : false})
    @Column({default : false})
    editComment!: boolean

    @Field(() => [Comment])
    @Column({type : 'json'})
    reply : Comment[]


    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date
}