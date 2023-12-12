let express = require('express');
const db_connect = require('./config/dbConnect');
const { ApolloServer } = require('@apollo/server');
const typeDefs = require('./graphql/typeQuery/typeDefs.js');
const resolvers = require('./graphql/resolvers/User.js')
const { startStandaloneServer } =require('@apollo/server/standalone') ;

require('dotenv').config()
let app = express();

app.use(express.json())
//Local Port
const PORT = process.env.PORT

// connect mongoDb
db_connect()


let server = new ApolloServer({typeDefs,resolvers})

startStandaloneServer(server, {
    listen: { port: 4000 },
  });





