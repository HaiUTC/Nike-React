import dynamic from 'next/dynamic'
import Head from 'next/head'
const Layout = dynamic(() => import('../components/Templete/Layout/Layout'),{ ssr: false })
const Main = dynamic(() => import('../components/Templete/Main/Main'),{ ssr: false })
const ListProductShowUp = dynamic(() => import('../components/Templete/ListProductShowUp/ListProductShowUp'))
const CategoryContent = dynamic(() => import('../components/Templete/ContentLikeTrending/CategoryContent'))

const Index = ({contentTrending,contentMoreNike,contentMain,listProduct}) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="/css/Header.css"/>
      <link rel = "icon" href ="http://localhost:3000/static/image/logo.png" type = "image/x-icon"></link>
      <title>Nike. Just do it. Nike VN</title>
    </Head>
    <Layout>
      <Main data={contentMain[0]}/>
      <ListProductShowUp data={listProduct.JoinFastFamily} title="Join the Fast Family"/>
      <CategoryContent data={contentTrending} title="Trending"/>
      <Main data={contentMain[1]}/>
      <ListProductShowUp data={listProduct.FeaturedFootwear} title="Featured Footwear"/>
      <CategoryContent data={contentMoreNike} title="More Nike"/>
    </Layout>
  </>
  
)
export const getStaticProps = async () => {
  const url = `${process.env.URL_FETCH_DATA}/home.json`
  const response = await fetch(url)
  const data = await response.json()
  return {
    props : {
      contentTrending : data.trending,
      contentMoreNike : data.morenike,
      contentMain : data.main,
      listProduct : data.listProduct
    }
  }
};
export default Index
