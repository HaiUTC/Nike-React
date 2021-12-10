import dynamic from 'next/dynamic'
import Head from 'next/head'
const CategoryHeaderSelect = dynamic(() => import('../components/Atom/Product/CategoryHeaderSelect'),{ ssr: false })
const CategoryContent = dynamic(() => import('../components/Templete/ContentLikeTrending/CategoryContent'),{ ssr: false })
const Layout = dynamic(() => import('../components/Templete/Layout/Layout'),{ ssr: false })
const ListProductShowUp = dynamic(() => import('../components/Templete/ListProductShowUp/ListProductShowUp'),{ ssr: false })
const Main = dynamic(() => import('../components/Templete/Main/Main'),{ ssr: false })

const Women = ({contentTrending,contentMoreNike,contentMain,listProduct,headerData}) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/image/logo.png" type = "image/x-icon"></link>
                <title>Woman's Shoes, Clothing &amp; Accessories. Nike VN</title>
            </Head>
            <Layout>
                <CategoryHeaderSelect data={headerData.items} title="Woman"/>
                <Main data={contentMain[0]}/>
                <ListProductShowUp data={listProduct.TheNikeIconClashCollection} title="The Nike Icon Clash Collection"/>
                <CategoryContent data={contentTrending} title="Trending"/>
                <Main data={contentMain[1]}/>
                <CategoryContent data={contentMoreNike} title="The Essentials"/>
            </Layout>
        </>
    )
}
export const getStaticProps = async () => {
    const url = `${process.env.URL_FETCH_DATA}/women.json`
    const response = await fetch(url)
    const data = await response.json()
    return {
      props : {
        headerData: data.header,
        contentTrending : data.trending,
        contentMoreNike : data.morenike,
        contentMain : data.main,
        listProduct : data.listProduct
      }
    }
  };

export default Women