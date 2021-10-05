import Link from 'next/link'
import Layout from '../components/Templete/Layout'
import Head from 'next/head'
import { addApolloState, initializeApollo } from '../libs/apolloClient';
const Index = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
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
