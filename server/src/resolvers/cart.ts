import { checkAuthUser } from "../middleware/checkAuth";
import { CartInput } from "../types/Cart/CartInput";
import { CartMutationResponse } from "../types/Cart/CartMutationResponse";
import { Arg, Ctx, FieldResolver, ID, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { Context } from "../types/Context/Context";
import { Product } from "../entities/Product";
import { CartItem } from "../entities/CartItem";
import { Cart } from "../entities/Cart";
@Resolver(_of => CartItem)
export class CartResolver{

    @FieldResolver(_return => Product)
    async product(@Root() root: CartItem){
        return await Product.findOne(root.productId)
    }

    @Query(_return => [CartItem], {nullable : true})
    @UseMiddleware(checkAuthUser)
    async GetCartOfUser(
        @Ctx() {req} : Context
    ):Promise<CartItem[] | undefined>{
        try {
            const existingCart = await Cart.findOne({userId : req.session.userId})
            return await CartItem.find({cartId : existingCart?.id})
        } catch (error) {
            console.log(`Something went wrong in DeleteProductInCart : ${error.message}`)
            return undefined
        }
    }

    @Mutation(_return => CartMutationResponse)
    @UseMiddleware(checkAuthUser)
    async AddProductToCart(
        @Arg('cartInput') {productId, size,color, discount}:CartInput,
        @Ctx() {req} : Context
    ):Promise<CartMutationResponse>{
        try {
            let existingCart = await Cart.findOne({userId : req.session.userId})
            if(!existingCart){
                existingCart = await Cart.create({
                    userId : req.session.userId,
                })
                await existingCart.save()
            }
            const existingProduct = await Product.findOne(productId)
            if(!existingProduct)
                return{
                    code : 400,
                    success : false,
                    message : 'Product not found',
                    errors : [
                        {
                            field : "Product",
                            message : 'Product not found'
                        }
                    ]
                }
            let existingCartItem = await CartItem.findOne({
                where : {productId,size,cartId : existingCart.id}
            })
            
            if(!existingCartItem){
                const monney = existingProduct.price * (100-discount)/100
                existingCartItem = await CartItem.create({
                    cartId : existingCart.id,
                    productId,
                    size,
                    quantity : 1,
                    color,
                    discount,
                    monney 
                })
                await existingCartItem.save()
            }
            else{
                existingCartItem.quantity++
                existingCartItem.monney = existingProduct.price * existingCartItem.quantity * (100-discount)/100
                await existingCartItem.save()
            }
            return{
                code : 200,
                success : true,
                message : 'Add product to cart successfully'
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in AddToCart : ${error.message}`,
                
            }
        }
    }

    @Mutation(_return => CartMutationResponse)
    @UseMiddleware(checkAuthUser)
    async DeleteProductInCart(
        @Arg('id', _type => ID) id : string,
        @Ctx() {req} : Context
    ):Promise<CartMutationResponse>{
        try {
            const existingCart = await Cart.findOne({userId : req.session.userId})
            const cartItem = await CartItem.findOne({
                where : {id,cartId : existingCart?.id}
            })
            if(cartItem) {
                await CartItem.remove(cartItem)  
                return {
                    code : 200,
                    success : true,
                    message : 'Delete product in cart successfully'
                }
            } 
            return {
                code : 400,
                success : false,
                message : 'Delete failure. Not authorize'
            }
            
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in DeleteProductInCart : ${error.message}`,               
            }
        }
    }

    @Mutation(_return => CartMutationResponse)
    @UseMiddleware(checkAuthUser)
    async ChangeSizeProductInCart(
        @Arg('id', _type => ID) id : string,
        @Arg('size') size : number,
        @Ctx() {req} : Context
    ): Promise<CartMutationResponse>{
        try {
            const existingCart = await Cart.findOne({userId : req.session.userId})
            const cartItem = await CartItem.findOne({
                where : {id,cartId : existingCart?.id}
            })
            if(cartItem) {
                cartItem.size = size
                await cartItem.save()
                return {
                    code : 200,
                    success : true,
                    message : 'Change size product in cart successfully'
                }
            }
            return {
                code : 400,
                success : false,
                message : 'Change size failure. Not authorize'
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in ChangeSizeProductInCart : ${error.message}`,               
            }
        }
    }

    @Mutation(_return => CartMutationResponse)
    @UseMiddleware(checkAuthUser)
    async ChangeQuantityProductInCart(
        @Arg('id', _type => ID) id : string,
        @Arg('quantity') quantity : number,
        @Ctx() {req} : Context
    ): Promise<CartMutationResponse>{
        try {
            const existingCart = await Cart.findOne({userId : req.session.userId})
            const cartItem = await CartItem.findOne({
                where : {id,cartId : existingCart?.id}
            })
            if(cartItem) {
                cartItem.quantity = quantity
                await cartItem.save()
                return {
                    code : 200,
                    success : true,
                    message : 'Change quantity product from cart successfully'
                }
            }
            return {
                code : 400,
                success : false,
                message : 'Change quantity failure. Not authorize'
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in ChangeQuantityProductInCart : ${error.message}`,               
            }
        }
    }


}