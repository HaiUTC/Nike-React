require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import { UserResolver } from './resolvers/user'
import session from 'express-session'
import { COOKIE_NAME, __prod__ } from './constants'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'
import { Context } from './types/Context/Context'
import { Address } from './entities/Address'
import { AddressResolver } from './resolvers/address'
import { CollectionResolver } from './resolvers/collection'
import { CategoryResolver } from './resolvers/category'
import { Product } from './entities/Product'
import { ProductResolver } from './resolvers/product'
import { Category } from './entities/Category'
import { Collection } from './entities/Collection'
const PORT = process.env.PORT || 5000


const main = async () => {
    //conect posgresql
    await createConnection({
        type : 'postgres',
        database : 'Nike',
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        logging : true,
        synchronize : true,
        entities : [User,Address,Product,Category,Collection]
    })
    const app = express()
    //connect mongodb
    const mongoUrl = `mongodb+srv://${process.env.DB_M_USER}:${process.env.DB_M_PASSWORD}@socialnet.80lds.mongodb.net/${process.env.DB_M_NAME}?retryWrites=true&w=majority`
    await mongoose.connect(mongoUrl,{
    })
    console.log('MongoDB connected')
    //session
    app.use(session({
        name : COOKIE_NAME,
        store : MongoStore.create({mongoUrl}),
        cookie : {
            maxAge : 1000*60*60*30,
            httpOnly : true,
            secure : __prod__,
            sameSite : 'lax'
        },
        secret : process.env.SESSION_SECRET as string,
        saveUninitialized : false,
        resave : false
    }))
    //create apollo server
    const apolloServer = new ApolloServer ({
        schema : await buildSchema({
            resolvers : [UserResolver,AddressResolver,CollectionResolver,CategoryResolver,ProductResolver],
            validate : false}),
        context : ({req,res}) : Context => ({req,res}),
        plugins : [ApolloServerPluginLandingPageGraphQLPlayground]
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app , cors : false})
    app.listen(PORT,() => {
        console.log(`Server started on http://localhost:${PORT}. Graphql started on http://localhost:${PORT}${apolloServer.graphqlPath}`)
    })

}
main().catch(error => console.log(error))