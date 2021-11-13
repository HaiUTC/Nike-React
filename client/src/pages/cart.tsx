import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import SummaryCart from '../components/Atom/SummaryCart'
import ListCart from '../components/Molec/Cart/ListCart'
import ListFavorite from '../components/Molec/Cart/ListFavorite'
import Layout from '../components/Templete/Layout/Layout'
import { GetCartOfUserDocument, useGetAllProductsQuery, useGetCartOfUserQuery } from '../generated/graphql'
import { addApolloState, initializeApollo } from '../libs/apolloClient'
const Cart = () => {
    const {data , loading } = useGetCartOfUserQuery()
    useEffect(()=>{
        console.log('change')
        localStorage.setItem('quantityCart',JSON.stringify(data?.GetCartOfUser.quantity)) 
    },[])
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/image/logo.png" type = "image/x-icon"></link>
                <title>Your Cart. Nike VN</title>
            </Head>
            <Layout>
                <div className="main flex flex-col px-2 py-10 justify-between border-b-2 md:px-6 lg:px-14 lg:justify-center lg:flex-row">
                    <div className="w-full lg:w-2/4">
                        <ListCart listProduct={data?.GetCartOfUser.cartItems} loading={loading} removeItem={undefined} />
                        <ListFavorite data={null} />
                    </div>
                    <div className="w-full lg:w-80">
                        <SummaryCart price={data?.GetCartOfUser.total} />
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