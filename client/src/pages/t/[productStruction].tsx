import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { cloneDeep } from 'lodash'
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../components/Templete/Layout/Layout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { addApolloState, initializeApollo } from "../../libs/apolloClient";
import { UserContext } from "../../libs/UserContext";
import {
  GetProductIdDocument,
  useGetCommentQuery,
  useGetProductIdQuery,
} from "../../generated/graphql";
import { limit } from "../w/index";
import ListComment from "../../components/Molec/Comment/ListComment";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { hideListComment } from "../../redux/Comment/showListComment";
const LoadingPage = dynamic(() => import("../../components/Atom/Loading/LoadingPage"), {
  ssr: false,
});
const ListImageProduct = dynamic(
  () => import("../../components/Atom/Product/ListImageProduct"),
  { ssr: false }
);
const TitleProduct = dynamic(
  () => import("../../components/Atom/Product/TitleProduct"),
  { ssr: false }
);
const ProductInfomation = dynamic(
  () => import("../../components/Organ/Product/ProductInfomation"),
  { ssr: false }
);

let id = ""
const DetailProduct = () => {
  //define
  const router = useRouter();
  id = router.query.productStruction.toString().split("&id=")[1];
  const dispatch = useAppDispatch();

  //socket, redux
  const { socket, user } = useContext(UserContext);
  const isShowListComment = useAppSelector((state) => state.showList.isShow);

  //index list image poster data comment
  const [indexPoster, setIndexPoster] = useState(0);
  const [dataComment, setDataComment] = useState([]);
  const [lengthComment, setLengthComment] = useState(null);
  const [reviewRating, setReviewRating] = useState(null);

  //change state to get comment again

  //func
  const changeIndexPoster = (newIndex) => setIndexPoster(newIndex);
  const handleCloseListComment = () => {
    dispatch(hideListComment());
  };

  //get product
  const { data, loading } = useGetProductIdQuery({
    variables: { id : id as string },
  });
  //get comment
  const { data: _dataComment, loading: _loadingComment } = useGetCommentQuery({
    variables: {
      limit,
      productId: id,
    },
  });

  useEffect(() => {
      setDataComment(_dataComment?.GetComment?.paginatedComments || [])
      setLengthComment(_dataComment?.GetComment?.totalCount || 0)
      setReviewRating(_dataComment?.GetComment?.reviewRating || 0)
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
        setDataComment([comment, ...dataComment]);
        setLengthComment(length);
        setReviewRating(reviewRating);
      });
      return () => socket.off("ServerUserCreateComment");
    }
  }, [dataComment, socket]);

   //create reply comment
   useEffect(()=>{
    if(socket){
      socket.on('ServerUserCreateCommentReply', msg => {
        if(msg){
          const index = dataComment.findIndex(cmt => cmt.id  === msg.newReply.commentId)
          if(index !== -1) {
            let newDataComment = cloneDeep(dataComment)
            try{
              newDataComment[index].replys.push(msg.newReply)
            }
            catch{
              newDataComment[index]['replys'] =[]
              newDataComment[index].replys.push(msg.newReply)
            }
            setDataComment(newDataComment)
          } 
        }
      })
      return () => socket.off("ServerUserCreateCommentReply")
    }
    
  },[socket,dataComment])

   //delete comment
   useEffect(() => {
    if(socket){
      socket.on('ServerUserDeleteComment', data => {
        const dataCmt = [...dataComment]
        const index = dataCmt.findIndex(item => item.id === data.comment.id)
        dataCmt.splice(index,1)
        setLengthComment(data.length)
        setDataComment(dataCmt)
        setReviewRating(data.reviewRating)
      })
      return () => socket.off('ServerUserDeleteComment')
    }
  },[socket,dataComment])

  //delete reply comment
  useEffect(() => {
    if(socket){
      socket.on('ServerUserDeleteReplyComment', msg => {
        if(msg){
          const index = dataComment.findIndex(cmt => cmt.id  === msg.commentId)
          if(index !== -1) {
            let newDataComment = cloneDeep(dataComment)
            try{
              const indexReply = newDataComment[index].replys.findIndex(rep => rep.id === msg.dataReply.id)
              if(index!==-1) {
                newDataComment[index].replys.splice(indexReply,1)
                setDataComment(newDataComment)
              }
            }
            catch{}
          } 
        }
      })
      return () => socket.off("ServerUserDeleteReplyComment")
    }
  },[socket,dataComment])


  //react comment
  useEffect(() => {
    if(socket){
      socket.on('ServerUserReactComment', msg => {
        if(msg){
          const dataCmt = [...dataComment]
          const index = dataCmt.findIndex(item => item.id === msg.existingComment.id)
          dataCmt[index] = msg.existingComment
          setDataComment(dataCmt)
        }
      })
      return () => socket.off('ServerUserReactComment')
    }
    
  },[socket,dataComment])

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
          href="http://localhost:3000/static/icons/logo.svg"
          type="image/x-icon"
        ></link>
        <title>Men's Shoes, Clothing &amp; Accessories. Nike VN</title>
      </Head>
      <Layout>
        {loading  ? <LoadingPage /> : 
        <div className="main pt-10 max-w-screen-xl mx-auto">
          <div className="lg:grid lg:grid-cols-12">
            <div className="px-2 md:px-6 pb-10 block lg:hidden">
              <TitleProduct
                name={data?.GetProductId.name}
                price={data?.GetProductId.price}
                title={data?.GetProductId.title}
              />
            </div>
            {/* list image */}
            <div className="col-span-8 px-2 ">
              <ListImageProduct
                data={data?.GetProductId.poster}
                indexPoster={indexPoster}
              />
            </div>
            {/* user select -name - size -add & favorite -delivery -review(comment)  */}
            <div className="col-span-4 px-2 md:pr-3 md:pl-6">
              <ProductInfomation
                data={data?.GetProductId}
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
              //product
              image={data?.GetProductId.picture.url}
              price={data?.GetProductId.price}
              name={data?.GetProductId.name}
              //socket
              user={user}
              socket={socket}
              productId={id}
            />
          }
        </div>
        }
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const apolloClient = initializeApollo({ headers: context.req.headers })

	await apolloClient.query({
		query: GetProductIdDocument,
		variables: { id : id},
	})

	return addApolloState(apolloClient, {
		props: {},
        
	})
}

export default DetailProduct;
