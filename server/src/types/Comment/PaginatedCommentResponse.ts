import { Comment } from "../../entities/Comment";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PaginatedCommentResponse {
    @Field()
    totalCount!: number

	@Field()
    reviewRating!: number

    @Field(_type => Date)
	cursor!: number|Date

	@Field()
	hasMore!: boolean

	@Field(_type => [Comment])
	paginatedComments: Comment[]
}