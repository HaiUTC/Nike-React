import { NetworkStatus } from '@apollo/client'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from "next/router"
import LoadingPage from '../../components/Atom/LoadingPage'
import Layout from "../../components/Templete/Layout/Layout"
import ListProductPerPage from '../../components/Templete/ListProductPerPage'
import { SearchQueryDocument, useSearchQueryQuery } from '../../generated/graphql'
import { addApolloState, initializeApollo } from '../../libs/apolloClient'
const limit = 9
let keyword = ""
const Index = () => {
    const router = useRouter()
    const { q } = router.query
    keyword = q as string
    const {data,loading,fetchMore, networkStatus} = useSearchQueryQuery({
        variables : {
            limit ,
            keyword 
        }
    })
    const loadingMoreProduct = networkStatus === NetworkStatus.fetchMore
    const loadMoreProducts = () => {
        fetchMore({ variables: {
            limit,
            keyword,
            cursor: data?.SearchResult.cursor as string
        } 
    })
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/Main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/icons/logo.svg" type = "image/x-icon"></link>
                <title>{`Search results for : ${q}. Nike VN`}</title>
            </Head>
            <Layout>
                {loading && !loadingMoreProduct ? <LoadingPage /> : (                    
                    <ListProductPerPage 
                        products={data?.SearchResult?.paginatedProducts}
                        totalCount={data?.SearchResult?.totalCount}
                        hasMore={data?.SearchResult?.hasMore}
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
		query: SearchQueryDocument,
		variables: {
            limit ,
            keyword
		}
	})

	return addApolloState(apolloClient, {
		props: {},
        
	})
}

export default Index