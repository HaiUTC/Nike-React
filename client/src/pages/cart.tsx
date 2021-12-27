import dynamic from 'next/dynamic'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { addApolloState, initializeApollo } from '../libs/apolloClient'
import { GetCartOfUserDocument, useDeleteProductInCartMutation, useGetCartOfUserQuery } from '../generated/graphql'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../redux/hook'
const SummaryCart = dynamic(() => import('../components/Atom/Cart/SummaryCart'),{ ssr: false })
const ListCart = dynamic(() => import('../components/Molec/Cart/ListCart'),{ ssr: false })
const ListFavorite = dynamic(() => import('../components/Molec/Cart/ListFavorite'),{ ssr: false })
const Layout = dynamic(() => import('../components/Templete/Layout/Layout'),{ ssr: false })
import { changeNumCart } from '../redux/Cart/countNumber'
const Cart = () => {
    const numCart = useAppSelector((state) => state.countNumber.numCart);
    const dispatch = useAppDispatch();

    const {data: _cartData , loading } = useGetCartOfUserQuery()
    if(!loading && _cartData) dispatch(changeNumCart(_cartData.GetCartOfUser.quantity))

    const [cart,setCart] = useState({
        product : _cartData.GetCartOfUser.cartItems,
        total : _cartData.GetCartOfUser.total
    })
    const [remoteProductFormCart, {loading : _loadingRemove}] = useDeleteProductInCartMutation()

    const removeItem = async (productId: string,quantity:number) => {
        const response = await remoteProductFormCart({
            variables : {
                id : productId
            }
        })
        if(response.data?.DeleteProductInCart.errors){
            console.log(response.data.DeleteProductInCart.message)
        }
        else if(response.data?.DeleteProductInCart.success){
            setCart(
                {
                    product : response.data.DeleteProductInCart.cart.cartItems,
                    total : response.data.DeleteProductInCart.cart.total
                }
            )
            dispatch(changeNumCart(numCart-quantity))
        }
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                <link rel = "icon" href ="/static/image/logo.png" type = "image/x-icon"></link>
                <title>Your Cart. Nike VN</title>
            </Head>
            <Layout>
                <div className="main flex flex-col px-2 py-10 justify-between border-b-2 md:px-6 lg:px-14 lg:justify-center lg:flex-row">
                    <div className="w-full lg:w-2/4">
                        <ListCart listProduct={cart.product} loading={loading} removeItem={removeItem} />
                        <ListFavorite data={null} />
                    </div>
                    <div className="w-full lg:w-80">
                        <SummaryCart listProduct={cart.product} price={cart.total} />
                    </div>

                    {/* More product same */}
                </div>
            </Layout>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const apolloClient = initializeApollo({ headers: context.req.headers })

	await apolloClient.query({
		query: GetCartOfUserDocument,
		variables: {},
	})

	return addApolloState(apolloClient, {
		props: {},
        
	})
}
export default Cart