import { Product } from "../entities/Product";
import { FieldResolver, Resolver, Root } from "type-graphql";
import { CheckOutItem } from "../entities/CheckOutItem";

@Resolver(_of => CheckOutItem)
export class CheckOutItemResolver {
    @FieldResolver(_return => Product,{nullable : true})
    async product(@Root() root: CheckOutItem){
        return await Product.findOne(root.productId)
    }
}