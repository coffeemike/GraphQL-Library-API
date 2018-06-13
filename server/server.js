const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schemas/Schema')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://mikkel:Passord123@ds259410.mlab.com:59410/gql-library')
mongoose.connection.once('open', () => {
    console.log('connected to DB')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listening on port 4k')
});