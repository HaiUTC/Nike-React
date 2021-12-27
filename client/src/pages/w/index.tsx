import dynamic from 'next/dynamic'
import { NetworkStatus } from '@apollo/client'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
const DynamicListProductPerPage = dynamic(() => import('../../components/Templete/ListProductPerPage'),{ ssr: false })
import { GetAllProductsDocument, useGetAllProductsQuery } from '../../generated/graphql'
import { addApolloState, initializeApollo } from '../../libs/apolloClient'
const Layout = dynamic(() => import('../../components/Templete/Layout/Layout'),{ ssr: false })
const LoadingPage = dynamic(() => import('../../components/Atom/Loading/LoadingPage'),{ ssr: false })
export const limit = 9
const Index = () => {
    const {data,loading,fetchMore, networkStatus} = useGetAllProductsQuery({
        variables : {
            limit
        },
        notifyOnNetworkStatusChange: true
    })
    const loadingMoreProduct = networkStatus === NetworkStatus.fetchMore
    const loadMoreProducts = () => {
        fetchMore({ variables: {
            limit,
            cursor: data?.GetAllProducts?.cursor
        } 
    })
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/icons/logo.svg" type = "image/x-icon"></link>
                <title>Products. Nike VN</title>
            </Head>
            <Layout>
                {loading && !loadingMoreProduct ? <LoadingPage /> : (                    
                    <DynamicListProductPerPage 
                        products={data?.GetAllProducts?.paginatedProducts}
                        totalCount={data?.GetAllProducts?.totalCount}
                        hasMore={data?.GetAllProducts?.hasMore}
                        fetchMore={loadMoreProducts}
                    />
                )}
            </Layout>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const apolloClient = initializeApollo({ headers: context.req.headers })

	await apolloClient.query({
		query: GetAllProductsDocument,
		variables: {
            limit
		}
	})

	return addApolloState(apolloClient, {
		props: {},
        
	})
}
export default Index