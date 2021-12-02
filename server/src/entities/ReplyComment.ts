import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./Comment";
import { User } from "./User";

@ObjectType()
@Entity()
export class ReplyComment extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Field()
    @Column({type : 'uuid'})
    commentId!: string

    @Field()
    @Column()
    userId!: number

    @Field()
    @Column()
    name!: string

    @Field()
    @Column()
    avatar!: string

    @Field(_type => User)
    @ManyToOne(()=> User, user => user.comments)
    user : User

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

    @Field()
    @CreateDateColumn({type: "timestamptz"})
    createdAt : Date

    @Field()
    @UpdateDateColumn({type: "timestamptz"})
    updatedAt : Date

    @Field(_type => Comment)
    @ManyToOne(() => Comment, comment => comment.replys)
    comment: Comment
}