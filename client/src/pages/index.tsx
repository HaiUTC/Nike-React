import Link from 'next/link'
import Layout from '../components/Templete/Layout'
import Head from 'next/head'
const IndexPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    </Head>
    <Layout>
      <h1 className='text-2xl'>Hello Next.js 👋</h1>
      
    </Layout>
  </>
  
)

export default IndexPage
