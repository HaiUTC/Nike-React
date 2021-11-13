import { CartItem } from "../entities/CartItem";
import { Product } from "../entities/Product";
import { FieldResolver, Resolver, Root } from "type-graphql";

@Resolver(_of => CartItem)
export class CartItemResolver{
    @FieldResolver(_return => Product,{nullable : true})
    async product(@Root() root: CartItem){
        return await Product.findOne(root.productId)
    }
}