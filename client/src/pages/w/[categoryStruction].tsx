import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NetworkStatus } from '@apollo/client'
import { GetServerSideProps, GetServerSidePropsContext} from 'next'
import { useRouter } from 'next/router'
import { GetProductByCategoryAndCollectionDocument, useGetProductByCategoryAndCollectionQuery } from '../../generated/graphql'
import { addApolloState, initializeApollo } from '../../libs/apolloClient'
const Layout = dynamic(() => import('../../components/Templete/Layout/Layout'),{ ssr: false })
const ListProductPerPage = dynamic(() => import('../../components/Templete/ListProductPerPage'))
const LoadingPage = dynamic(() => import('../../components/Atom/Loading/LoadingPage'),{ ssr: false })
import { limit } from './index'
export let categoryId = 0
export let sort

const CategoryProduct = () => {
    const router = useRouter();
    categoryId = +(router.query?.categoryStruction.toString().split('-')[2])
    sort = router.query.sort
    
    const {data,loading,fetchMore, networkStatus} = useGetProductByCategoryAndCollectionQuery({
        variables : {
            limit,
            categoryId : categoryId.toString(),
            sort : sort as string
        },
        notifyOnNetworkStatusChange: true
    })
    const loadingMoreProduct = networkStatus === NetworkStatus.fetchMore
    const loadMoreProducts = () => {
        fetchMore({ variables: {
            limit,
            categoryId : categoryId.toString(), 
            sort : sort as string,
            cursor: data?.GetProductByCategoryAndCollection?.cursor
        } 
    })
    }
    return(
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/Main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/icons/logo.svg" type = "image/x-icon"></link>
                <title>Men's Shoes, Clothing &amp; Accessories. Nike VN</title>
            </Head>
            <Layout>
                
                {(loading && !loadingMoreProduct) ? <LoadingPage /> : (                    
                    <ListProductPerPage 
                        categoryId={categoryId}
                        products={data?.GetProductByCategoryAndCollection?.paginatedProducts}
                        totalCount={data?.GetProductByCategoryAndCollection?.totalCount}
                        hasMore={data?.GetProductByCategoryAndCollection?.hasMore}
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
		query: GetProductByCategoryAndCollectionDocument,
		variables: {
			categoryId : categoryId,
            limit,
            sort: sort as string
		}
	})

	return addApolloState(apolloClient, {
		props: {},
        
	})
}
export default CategoryProduct