import Head from 'next/head'
import { GetServerSideProps, GetServerSidePropsContext} from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Templete/Layout/Layout'
import ListProductPerPage from '../../components/Templete/ListProductPerPage'
import { addApolloState, initializeApollo } from '../../libs/apolloClient'
import { GetProductByCategoryAndCollectionDocument, useGetProductByCategoryAndCollectionQuery } from '../../generated/graphql'

export let categoryId = 0
const CategoryProduct = () => {
    const router = useRouter();
    categoryId = +(router.query?.categoryStruction.toString().split('-')[2])
    const {data} = useGetProductByCategoryAndCollectionQuery({
        variables : {
            categoryId : "1"
        }
    })
    console.log(data)
    
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
                <ListProductPerPage />
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
			categoryId : "1"
		}
	})

	return addApolloState(apolloClient, {
		props: {}
	})
}
export default CategoryProduct