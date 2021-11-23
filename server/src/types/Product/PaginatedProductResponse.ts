import { Product } from "../../entities/Product";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PaginatedProductResponse{
    @Field()
    totalCount!: number

    @Field(_type => Date)
	cursor!: number|Date

	@Field()
	hasMore!: boolean

	@Field(_type => [Product])
	paginatedProducts: Product[]
}