import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import Layout from "../../components/Templete/Layout/Layout"
import { useSearchQueryQuery } from '../../generated/graphql'

const Index = () => {
    const router = useRouter()
    const { q } = router.query

    const {data,loading,fetchMore, networkStatus} = useSearchQueryQuery({
        variables : {
            limit,
            keyword : q
        },
        notifyOnNetworkStatusChange: true
    })

    useEffect(() => {
        async function Search(){
            const response = await searchMutation({
                variables : {
                    keyword : q as string
                }
            })
        }
        Search()
    },[q])
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
                
            </Layout>
        

        </>
    )
}

export default Index