import dynamic from 'next/dynamic'
import Head from 'next/head'
import News from '../components/Templete/News/News'

const PlayBook  = dynamic(() => import('../components/Templete/PlayBook/PlayBook'),{ ssr: false })
const CategoryHeaderSelect = dynamic(() => import('../components/Atom/Product/CategoryHeaderSelect'),{ ssr: false })
const CategoryContent = dynamic(() => import('../components/Templete/ContentLikeTrending/CategoryContent'),{ ssr: false })
const ListProductShowUp = dynamic(() => import('../components/Templete/ListProductShowUp/ListProductShowUp'),{ ssr: false })
const Main = dynamic(() => import('../components/Templete/Main/Main'),{ ssr: false })
const Layout = dynamic(() => import('../components/Templete/Layout/Layout'),{ ssr: false })


const Kids = ({headerData,contentMain,listProduct,contentMoreNike,playbook,news,trending}) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel = "icon" href ="https://nike-react.vercel.app/static/image/logo.png" type = "image/x-icon"></link>
                <title>Nike Kid's Shoes, Clothing &amp; Accessories. Nike VN</title>
            </Head>
            <Layout>
                <CategoryHeaderSelect data={headerData.items} title="Kids"/>
                <Main data={contentMain[0]}/>
                <ListProductShowUp data={listProduct.FeaturedFootwear} title="The Latest & Greatest"/>
                <Main data={contentMain[1]}/>
                <CategoryContent data={contentMoreNike} title="More to Explore"/>
                <Main data={contentMain[2]}/>
                <PlayBook data={playbook}/>
                <News data={news}/>
                <CategoryContent data={trending} title="More Ways to Get Moving" isAbsolute={false}/>

            </Layout>
        </>
    )
}
export const getStaticProps = async () => {
    const url = `${process.env.URL_FETCH_DATA}/kids.json`
    const response = await fetch(url)
    const data = await response.json()
    return {
      props : {
        headerData: data.header,
        contentMain : data.main,
        listProduct : data.listProduct,
        contentMoreNike : data.morenike,
        playbook : data.playbook,
        news : data.news,
        trending : data.trending
      }
    }
  };
export default Kids