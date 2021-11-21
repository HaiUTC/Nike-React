import { checkAuthUser } from "../middleware/checkAuth";
import { CartInput } from "../types/Cart/CartInput";
import { CartMutationResponse } from "../types/Cart/CartMutationResponse";
import { Arg, Ctx, FieldResolver, ID, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { Context } from "../types/Context/Context";
import { Product } from "../entities/Product";
import { CartItem } from "../entities/CartItem";
import { Cart } from "../entities/Cart";
@Resolver(_of => Cart)
export class CartResolver{
    @FieldResolver(_return => [CartItem], {nullable : true})
    async cartItems(@Root() root: Cart){
        return await CartItem.find({cartId : root.id})
    }

    @Query(_return => Cart)
    @UseMiddleware(checkAuthUser)
    async GetCartOfUser(
        @Ctx() {req} : Context
    ):Promise<Cart | null>{
        try {
            return await Cart.findOne({userId : req.session.userId}) || null
        } catch (error) {
            console.log(`Something went wrong in DeleteProductInCart : ${error.message}`)
            return null
        }
    }

    @Mutation(_return => CartMutationResponse)
    @UseMiddleware(checkAuthUser)
    async AddProductToCart(
        @Arg('cartInput') {productId, size,color, discount}:CartInput,
        @Ctx() {req} : Context
    ):Promise<CartMutationResponse>{
        try {
            const existingCart = await Cart.findOne({userId : req.session.userId})
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
                where : {productId,size,cartId : existingCart?.id}
            })
            
            if(!existingCartItem){
                const monney = existingProduct.price * (100-discount)/100
                existingCartItem = await CartItem.create({
                    cartId : existingCart?.id,
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
            if(existingCart){
                const listOfCartItem = await CartItem.find({cartId : existingCart?.id})
                existingCart.quantity = await CartItem.count({ cartId : existingCart?.id})
                existingCart.total = listOfCartItem.reduce((total, num) => {return Number.parseFloat(total.toString()) + Number.parseFloat(num.monney.toString())},0)
                await existingCart.save()
            }
            return{
                code : 200,
                success : true,
                message : 'Add product to cart successfully',
                cart : existingCart
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
                where : {productId:id,cartId : existingCart?.id}
            })
            console.log('Cart Item : ',cartItem)
            if(cartItem) {
                await CartItem.remove(cartItem)  
                if(existingCart){
                    const listOfCartItem = await CartItem.find({cartId : existingCart?.id})
                    existingCart.quantity = await CartItem.count({ cartId : existingCart?.id})
                    existingCart.total = listOfCartItem.reduce((total, num) => {return Number.parseFloat(total.toString()) + Number.parseFloat(num.monney.toString())},0
                    )
                    await existingCart.save()
                }
                return {
                    code : 200,
                    success : true,
                    message : 'Delete product in cart successfully',
                    cart : existingCart
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