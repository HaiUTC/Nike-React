import { Server, Socket } from "socket.io"
import { Comment } from "./entities/Comment"
import { Product } from "./entities/Product"
import { User } from "./entities/User"
import {getConnection} from "typeorm";
import { ReplyComment } from "./entities/ReplyComment";


interface user {
    id : string,
    room : string
}
interface countuser {
    user : user
}

export const RunSocket = ( io : Server )  => {
    let userComment : user[] = []
    let countUserOnline : countuser[] = []

    io.on('connection', (socket : Socket) => {
        console.log('Have anyone just connected : ', socket.id)
        //Joimn room
        socket.on('joinRoom', id => {
          const user = {id : socket.id, room : id}
          const check = userComment.every((user) => user.id !== socket.id)
          if(check) {
            userComment.push(user)
            socket.join(user.room)
          }
          else{
            userComment.map(user => {
              if(user.id === socket.id){
                if(user.room !== id){
                  socket.leave(user.room)
                  socket.join(id),
                  user.room = id
                }
              }
            })
          }
      
        })

        //User Online
        socket.on('countUserOnline', async (id) => {
            try {
            const user = {id : socket.id, room : id}
            const check = userComment.every((user) => user.id !== socket.id)
            if(check) {
                userComment.push(user)
                socket.join(user.room)
            }
            const data = {
                accOnline : countUserOnline.length,
                //view
            }
            socket.emit('ServerCountUserOnline', data)
            } catch (error) {
            console.log(error)
            }
        })


        //Create Comment
        socket.on('userCreateComment', async (msg) => {
          try {
            const {productId, title, content,star,send,commentId,userId,name,avatar} = msg
            const user = await User.findOne(userId)
            if(user){              
              if(send === 'replyComment'){
                const comment = await Comment.findOne(commentId)
                if(comment){
                  const newReply = await ReplyComment.create({commentId,userId,name,avatar,content}).save()
                  io.to(comment.productId).emit('ServerUserCreateCommentReply', {newReply,commentId})
                }
              }
              else{
                const newComment = await Comment.create({userId,name,avatar,productId,title,content,star}).save()
                const dataComment = await Comment.find({productId})
                const product = await Product.findOne(productId)
                const resultData = {
                  length : dataComment.length,
                  comment : newComment,
                  reviewRating : (product) && (product.rating / product.numberReview) 
                }
                io.to(newComment.productId).emit("ServerUserCreateComment", resultData)
              }
            }
            else{
              const noUsers = {
                accountDelete: true,
                userId
              }
              io.sockets.emit("serverDeleteAccount", noUsers);
            }
          } catch (error) {
            console.log(error)
          }
        })

        //Delete Comment
        socket.on('UserDeleteComment', async (msg) => {
          try {
            const { id, productId, userId,send,commentId} = msg;
            const user = await User.findOne({id : userId});
            if(user){
              //delete if is reply
              if(send === 'replyComment'){
                const dataReply = await ReplyComment.findOne(id)
                if(dataReply){
                  await getConnection()
                          .createQueryBuilder()
                          .delete()
                          .from(ReplyComment)
                          .where("id = :id", {id})
                          .execute();
                  io.to(productId).emit('ServerUserDeleteReplyComment', {dataReply,commentId})
                }
              }
              //delete if is comment
              else{
                const comment = await Comment.findOne(id)
                await getConnection()
                  .createQueryBuilder()
                  .delete()
                  .from(Comment)
                  .where("id = :id", { id : `${id}`})
                  .execute();

                const dataComment = await Comment.find({productId})
                const product = await Product.findOne(productId)
                const resultData = {
                  length : dataComment.length,
                  comment : comment,
                  reviewRating : product && product.rating /product?.numberReview
                }
                io.to(productId).emit('ServerUserDeleteComment', resultData)
              }
            }
            else{
              const noUsers = {
                accountDelete: true,
                _id_user: userId
              }
              io.sockets.emit("ServerDeleteAccount", noUsers);
            }
          } catch (error) {
            console.log(error)
          }
        })

        //Edit comment
        socket.on('UserEditComment' ,async (msg) =>{
          try {
              const {title,content,star, id,userId,send} = msg
              const user = await User.findOne(userId)
              if(user){
                if(send === 'replyComment'){
                  const dataReply = await ReplyComment.findOne(id)
                  if(dataReply){
                    await getConnection()
                            .createQueryBuilder()
                            .update(ReplyComment)
                            .set({ content })
                            .where("id = :id", { id:id })
                            .execute();
                    io.to(dataReply.id).emit('ServerUserEditReplyComment', dataReply)
                  }
                }
                else{
                  const comment = await Comment.findOne(id)
                  if(comment){
                    await getConnection()
                      .createQueryBuilder()
                      .update(Comment)
                      .set({ content,star,title })
                      .where("id = :id", { id })
                      .execute();
                    const resultData = { comment }
                    io.to(comment.productId).emit("ServerUserEditComment", resultData);
                  }
                }
              }
              else{
                  const noUsers = {
                      accountDelete: true,
                      _userId: userId
                    }
                  io.sockets.emit("serverDeleteAccount", noUsers);
              }
          } catch (error) {
              console.log(error)
          }
        })

        //Wait User Comment 
        socket.on('WaitUserComment', async (msg) => {
          const {productId, message} = msg
          socket.to(productId).emit('WaitUserComment', message)
         })

         //Upload Image
        socket.on('UserUploadAvatar', async (msg) => {
          const {userId, avatar} = msg 
          await getConnection()
                    .createQueryBuilder()
                    .update(User)
                    .set({ avatar })
                    .where("id = :id", { id : userId })
                    .execute();
          const user = await User.findOne({id : userId})
          io.sockets.emit('ServerUploadAvatar',user)
          })

        //Disconect
        socket.on("disconnect", async () => {
          console.log(socket.id + " disconnected.")
          userComment = userComment.filter((user) => user.id !== socket.id)
          countUserOnline = countUserOnline.filter((user) => user.user.id !== socket.id)
          io.sockets.emit("severCountUserOnline", { accountOnline: countUserOnline.length})
        })






    })

    
  }