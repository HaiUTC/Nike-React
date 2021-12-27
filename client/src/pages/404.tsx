import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Templete/Layout/Layout"), {
  ssr: false,
});

const FourOhFour = (props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="/css/Header.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link
          rel="icon"
          href="https://nike-react.vercel.app/static/image/logo.png"
          type="image/x-icon"
        ></link>
        <title>Page Not Found. Nike VN</title>
      </Head>
      <Layout>
        <div className="py-16">
            <p className="text-center text-2xl">We can't find the page you are looking for.</p>
            <p className="text-center text-2xl">Sorry for the inconvenience.</p>
        </div>

        
      </Layout>
    </>
  );
};

export default FourOhFour;
