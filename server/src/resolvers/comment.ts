import { User } from "../entities/User";
import { Arg, Ctx, FieldResolver, ID, Int, Query, Resolver, Root } from "type-graphql";
import { Comment } from "../entities/Comment";
import { Product } from "../entities/Product";
import { Context } from "../types/Context/Context";
import { PaginatedCommentResponse } from "../types/Comment/PaginatedCommentResponse";
import { LessThan } from "typeorm";
import { ReplyComment } from "../entities/ReplyComment";

@Resolver(_of => Comment)
export class CommentResolver {

    @FieldResolver(_return => User)
    async user(
        @Root() root: Comment,
        @Ctx() {dataLoaders : {userLoader}} : Context
    ){
        return await userLoader.load(root.userId)
    }

    @FieldResolver(_return => [ReplyComment])
    async replys(
        @Root() root: Comment
    ){
        return await ReplyComment.find({commentId : root.id})
    }



    @Query(_return => PaginatedCommentResponse, {nullable : true})
    async GetComment(
        @Arg('productId',_type=> ID) productId : string,
        @Arg('limit', _type => Int, {nullable : true}) limit ?: number,
        @Arg('cursor', { nullable: true }) cursor?: string,
    //    @Arg('sort', {nullable : true}) sort?: string,
    ): Promise<PaginatedCommentResponse | undefined>{
        try {
            let order = {createdAt: 'DESC'}
            const totalCount = await Comment.count({where : { productId : productId}})
            const findOptions: { [key: string]: any } = {
                where : {productId },
				order,
				take: limit||9,
			}
            let lastComment: Comment[] = []
            if (cursor) {
				findOptions.where = { createdAt: LessThan(cursor) }
				lastComment = await Comment.find({ order : {createdAt : 'ASC'}, take: 1})
			}
            const listComment = await Comment.find(findOptions)
            const product = await Product.findOne({id : productId})
            const reviewRating = (product && product.numberReview > 0) ? product.rating / product.numberReview : 0
            return {
                totalCount,
                reviewRating,
                cursor: listComment && listComment[listComment.length-1].createdAt,
                hasMore : cursor
                ? listComment[listComment.length - 1].createdAt.toString() !== lastComment[0]?.createdAt.toString()
                : listComment.length !== totalCount,
                paginatedComments : listComment
            }
        } catch (error) {
            console.log(error)
            return undefined
        }
    }


}