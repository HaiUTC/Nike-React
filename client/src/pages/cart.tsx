import Head from 'next/head'
import SummaryCart from '../components/Atom/SummaryCart'
import ListCart from '../components/Molec/Cart/ListCart'
import ListFavorite from '../components/Molec/Cart/ListFavorite'
import Layout from '../components/Templete/Layout/Layout'
const Cart = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/image/logo.png" type = "image/x-icon"></link>
                <title>Your Cart. Nike VN</title>
            </Head>
            <Layout>
                <div className="main flex flex-col px-2 py-10 justify-between border-b-2 md:px-20 md:justify-center md:flex-row">
                    <div className="w-full md:w-2/4">
                        <ListCart listProduct={undefined} loading={true} removeItem={undefined} />
                        <ListFavorite data={null} />
                    </div>
                    <div className="w-full md:w-1/3">
                        <SummaryCart listProduct={undefined} price={undefined} />
                    </div>

                    {/* More product same */}
                </div>
            </Layout>
        </>
    )
}
export default Cart