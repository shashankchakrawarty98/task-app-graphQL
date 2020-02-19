const dotenv = require('dotenv').config('./.env');
const {ApolloServer} = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose')
const schema = require('./schema')
require('./utils/mongoose');
var graphqlHTTP = require('express-graphql');


const app = express();
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
    
//   }));

const server = new ApolloServer({
    
    schema,
    cors:true,
   
    playground: true,
//    playground:'localhost:4000/graphql',
   
    introspection:true,
    tracing:true,
    path:'/'
})

server.applyMiddleware({
    app,
    path:'/',
    cors:true,
    onHealthCheck:()=>{
        new Promise((resolve , reject)=>{

            console.log(mongoose.connection.readyState)
            if(mongoose.connection.readyState>0){
                resolve()
            }else{
                reject()
            }
        })
    }
})


  app.listen(4000);
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');