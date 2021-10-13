import Head from 'next/head'
import CategoryHeaderSelect from '../components/Atom/CategoryHeaderSelect';
import CategoryContent from '../components/Templete/ContentLikeTrending/CategoryContent';
import Layout from '../components/Templete/Layout/Layout'
import ListProductShowUp from '../components/Templete/ListProductShowUp/ListProductShowUp';
import Main from '../components/Templete/Main/Main';

const Men = ({contentTrending,contentMoreNike,contentMain,listProduct,headerData}) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/image/logo.png" type = "image/x-icon"></link>
                <title>Men's Shoes, Clothing &amp; Accessories. Nike VN</title>
            </Head>
            <Layout>
                <CategoryHeaderSelect data={headerData.items} title="Men"/>
                <Main data={contentMain[0]}/>
                <ListProductShowUp data={listProduct.FeaturedFootwear} title="Featured Footwear"/>
                <CategoryContent data={contentTrending} title="Trending"/>
                <Main data={contentMain[1]}/>
                <Main data={contentMain[2]}/>
                <CategoryContent data={contentMoreNike} title="The Essentials"/>
            </Layout>
        </>
    )
}
export const getStaticProps = async () => {
    const url = `${process.env.URL_FETCH_DATA}/men.json`
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

export default Men