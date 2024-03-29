import * as React from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import HeaderListCommnent from "../../Atom/Comment/HeaderListCommnent";
import TitleListComment from "../../Atom/Comment/TitleListComment";
import { TransitionProps } from "@mui/material/transitions";
import Comment from "../../Atom/Comment/Comment";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ListComment = (props) => {
  return (
    <Dialog fullScreen open={true} TransitionComponent={Transition}>
      <div className="px-4">
        <HeaderListCommnent
          handleCloseListComment={props.handleCloseListComment}
          image={props.image}
          price={props.price}
          name={props.name}
        />
      </div>
      <div className="overflow-scroll h-full">
        <div className="px-2 lg:px-60">
          <TitleListComment
            lengthComment={props.lengthComment}
            reviewRating={props.reviewRating}
          />
          {props.dataComment.map((item) => (
            <Comment
              key={item.createdAt}
              item={item}
              socket={props.socket}
              user={props.user}
              productId={props.productId}
            />
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default ListComment;
