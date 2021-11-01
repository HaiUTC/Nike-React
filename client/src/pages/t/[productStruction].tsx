import { useRouter } from "next/router";
import Head from 'next/head'
import Layout from "../../components/Templete/Layout/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { addApolloState, initializeApollo } from "../../libs/apolloClient";
import { AllProductIdsDocument, AllProductIdsQuery, GetProductIdDocument, GetProductIdQuery, useGetProductIdQuery } from "../../generated/graphql";
import {limit} from '../w/index'
import LoadingPage from "../../components/Atom/LoadingPage";
import ListImageProduct from "../../components/Atom/ListImageProduct";
import TitleProduct from "../../components/Atom/TitleProduct";
import ProductInfomation from "../../components/Organ/Product/ProductInfomation";
import { useState } from "react";
const DetailProduct = () => {
    const router = useRouter();
    const [indexPoster, setIndexPoster] = useState(0)
    const changeIndexPoster = (newIndex) =>  setIndexPoster(newIndex)
	const id = router.query.productStruction.toString().split("&id=")[1]
	const {data, loading, error} = useGetProductIdQuery({
        variables : {id },
    })
	const { GetProductId } = data
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/Main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/icons/logo.svg" type = "image/x-icon"></link>
                <title>Men's Shoes, Clothing &amp; Accessories. Nike VN</title>
            </Head>
            <Layout>
                {loading && <LoadingPage />}
				<div className="main pt-10 max-w-screen-xl mx-auto">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className='px-2 md:px-6 pb-10 block lg:hidden'><TitleProduct name={GetProductId.name} price={GetProductId.price} title={GetProductId.title}  /></div>
                        {/* list image */}
                        <div className="col-span-8 px-2 ">
                            <ListImageProduct data={GetProductId.poster} indexPoster={indexPoster}/>
                        </div>
                        {/* user select -name - size -add & favorite -delivery -review(comment)  */}
                        <div className="col-span-4 px-2 md:pr-3 md:pl-6">
                            <ProductInfomation data={GetProductId} changeIndexPoster={changeIndexPoster}/>
                        </div>
                    </div>

                {/* product same */}
              
                </div>
            </Layout>
        </>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo()

	const { data } = await apolloClient.query<AllProductIdsQuery>({
		query: AllProductIdsDocument,
		variables: { limit }
	})

	return {
		paths: data.GetAllProducts!.paginatedProducts.map(product => ({
			params: { productStruction: `${product.id}`}
		})),
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps<{ [key: string]: any },{ productStruction: string }> = async ({ params }) => {
	const apolloClient = initializeApollo()
	await apolloClient.query<GetProductIdQuery>({
		query: GetProductIdDocument,
		variables: { id: params?.productStruction.split('&id=')[1]}
	})

	return addApolloState(apolloClient, { props: {} })
}
export default DetailProduct