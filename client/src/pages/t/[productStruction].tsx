import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../components/Templete/Layout/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { addApolloState, initializeApollo } from "../../libs/apolloClient";
import { UserContext } from "../../libs/UserContext";
import {
  AllProductIdsDocument,
  AllProductIdsQuery,
  GetProductIdDocument,
  GetProductIdQuery,
  useGetCommentQuery,
  useGetProductIdQuery,
} from "../../generated/graphql";
import { limit } from "../w/index";
import ListComment from "../../components/Molec/Comment/ListComment";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { hideListComment } from "../../redux/Comment/showListComment";
const LoadingPage = dynamic(() => import("../../components/Atom/LoadingPage"), {
  ssr: false,
});
const ListImageProduct = dynamic(
  () => import("../../components/Atom/ListImageProduct"),
  { ssr: false }
);
const TitleProduct = dynamic(
  () => import("../../components/Atom/TitleProduct"),
  { ssr: false }
);
const ProductInfomation = dynamic(
  () => import("../../components/Organ/Product/ProductInfomation"),
  { ssr: false }
);
const DetailProduct = () => {
  //define
  const router = useRouter();
  const id = router.query.productStruction.toString().split("&id=")[1];
  const dispatch = useAppDispatch();

  //socket, redux
  const { socket, user } = useContext(UserContext);
  const isShowListComment = useAppSelector((state) => state.showList.isShow);

  //index list image poster data comment
  const [indexPoster, setIndexPoster] = useState(0);
  const [dataComment, setDataComment] = useState([]);
  const [lengthComment, setLengthComment] = useState(null);
  const [reviewRating, setReviewRating] = useState(null);

  //func
  const changeIndexPoster = (newIndex) => setIndexPoster(newIndex);
  const handleCloseListComment = () => {
    dispatch(hideListComment());
  };

  //get product
  const { data, loading } = useGetProductIdQuery({
    variables: { id },
  });
  const { GetProductId } = data;

  //get comment
  const { data: _dataComment, loading: _loadingComment } = useGetCommentQuery({
    variables: {
      limit,
      productId: id,
    },
  });

  useEffect(() => {
    if(_dataComment){
      setDataComment(_dataComment?.GetComment.paginatedComments)
      setLengthComment(_dataComment?.GetComment.totalCount)
      setReviewRating(_dataComment?.GetComment.reviewRating)
    }
  },[_loadingComment])


  //join room
  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", id);
    }
  }, [socket, id]);

  //create comment
  useEffect(() => {
    if (socket) {
      socket.on("ServerUserCreateComment", (msg) => {
        const { comment, length, reviewRating } = msg;
        if (msg) {
          setDataComment([comment, ...dataComment]);
          setLengthComment(length);
          setReviewRating(reviewRating);
        }
      });
      return () => socket.off("ServerUserCreateComment");
    }
  }, [dataComment, socket]);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="/css/Header.css" />
        <link rel="stylesheet" href="/css/Main.css" />
        <link
          rel="icon"
          href="http://localhost:3000/static/icons/logo.svg"
          type="image/x-icon"
        ></link>
        <title>Men's Shoes, Clothing &amp; Accessories. Nike VN</title>
      </Head>
      <Layout>
        {loading && <LoadingPage />}
        <div className="main pt-10 max-w-screen-xl mx-auto">
          <div className="lg:grid lg:grid-cols-12">
            <div className="px-2 md:px-6 pb-10 block lg:hidden">
              <TitleProduct
                name={GetProductId.name}
                price={GetProductId.price}
                title={GetProductId.title}
              />
            </div>
            {/* list image */}
            <div className="col-span-8 px-2 ">
              <ListImageProduct
                data={GetProductId.poster}
                indexPoster={indexPoster}
              />
            </div>
            {/* user select -name - size -add & favorite -delivery -review(comment)  */}
            <div className="col-span-4 px-2 md:pr-3 md:pl-6">
              <ProductInfomation
                data={GetProductId}
                changeIndexPoster={changeIndexPoster}
                dataComment={dataComment}
                lengthComment={lengthComment}
                reviewRating={reviewRating}
                //socket
                socket={socket}
                user={user}
                productId={id}
              />
            </div>
          </div>

          {/* product same */}

          {/* List comment */}
          {isShowListComment && 
            <ListComment 
              handleCloseListComment={handleCloseListComment} 
              lengthComment={lengthComment}
              reviewRating={reviewRating}
              dataComment={dataComment}
            />
          }
        </div>
      </Layout>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<AllProductIdsQuery>({
    query: AllProductIdsDocument,
    variables: { limit },
  });

  return {
    paths: data.GetAllProducts!.paginatedProducts.map((product) => ({
      params: { productStruction: `${product.id}` },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  { [key: string]: any },
  { productStruction: string }
> = async ({ params }) => {
  const apolloClient = initializeApollo();
  await apolloClient.query<GetProductIdQuery>({
    query: GetProductIdDocument,
    variables: { id: params?.productStruction.split("&id=")[1] },
  });

  return addApolloState(apolloClient, { props: {} });
};
export default DetailProduct;
