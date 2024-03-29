require('dotenv').config()
import path from 'path'
import 'reflect-metadata'
import express from 'express'
import { buildSchema } from 'type-graphql'
import cors from 'cors'
import { createServer } from "http";
import { Server } from "socket.io";
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { createConnection } from 'typeorm'
import session from 'express-session'
import { COOKIE_NAME, __prod__ } from './constants'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'
import { Context } from './types/Context/Context'
import { User } from './entities/User'
import { Address } from './entities/Address'
import { Product } from './entities/Product'
import { Category } from './entities/Category'
import { Collection } from './entities/Collection'
import { Cart } from './entities/Cart'
import { Search } from './entities/Search'
import { CartItem } from './entities/CartItem'
import { CheckOut } from './entities/CheckOut'
import { ProductResolver } from './resolvers/product'
import { AddressResolver } from './resolvers/address'
import { CollectionResolver } from './resolvers/collection'
import { CategoryResolver } from './resolvers/category'
import { UserResolver } from './resolvers/user'
import { CartResolver } from './resolvers/cart'
import { buildDataloader } from './untils/Dataloader/Dataloader'
import { CartItemResolver } from './resolvers/cartItem'
import { SearchResolver } from './resolvers/search'
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.static('public'));
const server = createServer(app)
import {RunSocket} from './socket'
import { Comment } from './entities/Comment'
import { CommentResolver } from './resolvers/comment'
import { ReplyComment } from './entities/ReplyComment'
import { graphqlUploadExpress } from 'graphql-upload'
import { CheckOutItem } from './entities/CheckOutItem'
import { CheckOutResolver } from './resolvers/checkOut'
import { CheckOutItemResolver } from './resolvers/checkOutItem'
import { ReactComment } from './entities/ReactComment'
import { ApolloServer } from 'apollo-server-express'
const main = async () => {
    //conect posgresql
    const connection = await createConnection({
        type : 'postgres',
        ...(__prod__
			? { url: process.env.DATABASE_URL }
			: {
                database : 'Nike',
                username : process.env.DB_USERNAME,
                password : process.env.DB_PASSWORD
			  }),
        logging : true,
        ...(__prod__
			? {
					extra: {
						ssl: {
							rejectUnauthorized: false
						}
					},
					ssl: true
			  }
			: {}),
		...(__prod__ ? {} : { synchronize: true }),
        entities : [User,Address,Product,Category,Collection,Cart,CartItem,CheckOut,Search,Comment,ReplyComment,CheckOutItem,ReactComment],
        migrations: [path.join(__dirname, '/migrations/*')]
    })

    if (__prod__) await connection.runMigrations()
    
    
    app.use(
		cors({
			origin: __prod__
				? process.env.CORS_ORIGIN_PROD
				: process.env.CORS_ORIGIN_DEV,
			credentials: true
		})
	)
    //connect mongodb
    const mongoUrl = `mongodb+srv://${process.env.DB_M_USER}:${process.env.DB_M_PASSWORD}@socialnet.80lds.mongodb.net/${process.env.DB_M_NAME}?retryWrites=true&w=majority`
    try{
      await mongoose.connect(mongoUrl,{
      })
    }catch(error){
      console.log(error)
    }
    console.log('MongoDB connected')

    //pp.set('trust proxy', 1)

    //session
    app.use(session({
        name : COOKIE_NAME,
        store : MongoStore.create({mongoUrl}),
        cookie : {
            maxAge : 1000*60*60*30*12,
            httpOnly : true,
            secure : __prod__,
            sameSite : 'lax'
        },
        secret : process.env.SESSION_SECRET as string,
        saveUninitialized : false,
        resave : false
    }))

    
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    


    //create apollo server
    const apolloServer = new ApolloServer ({
        schema : await buildSchema({
            resolvers: [UserResolver,AddressResolver,CollectionResolver,CategoryResolver,ProductResolver,CartResolver,
                        CartItemResolver,SearchResolver, CommentResolver,CheckOutResolver,CheckOutItemResolver] ,
            validate : false}),
        context : ({req,res}) : Context => ({req,res,connection,dataLoaders: buildDataloader()}),
        plugins : [ApolloServerPluginLandingPageGraphQLPlayground]
    })
    
    await apolloServer.start()
    apolloServer.applyMiddleware({app , cors : false})

    //socket io
    const io = new Server(server, {
        cors : {
          origin: __prod__ ? 'https://nike-react-si2j.vercel.app' : 'http://localhost:3000',
          methods: ["GET", "POST", "DELETE", "PUT"],
          allowedHeaders: [
            "Access-Control-Allow-Origin",
            "Access-Control-Header",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods",
          ],
          credentials: true,
        }
      })
      RunSocket(io)
      server.listen(PORT,() => {
        console.log(`Server started on http://localhost:${PORT}. Graphql started on http://localhost:${PORT}${apolloServer.graphqlPath}`)
    })

}
main().catch(error => console.log(error))