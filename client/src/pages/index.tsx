import Link from 'next/link'
import Layout from '../components/Templete/Layout'
import Head from 'next/head'
import { addApolloState, initializeApollo } from '../libs/apolloClient';
const Index = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel = "icon" href ="http://localhost:3000/img/logo.png" type = "image/x-icon"></link>
      <title>Nike. Just do it. Nike VN</title>
    </Head>
    <Layout>
      <h1 className='text-2xl'>Hello Next.js 👋</h1>
      
    </Layout>
  </>
  
)
export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  // await apolloClient.query({
  //   query: null,
  // });
  return addApolloState(apolloClient, {
    props: {},
  });
};
export default Index
