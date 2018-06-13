const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schemas/Schema')
const mongoose = require('mongoose')
const connect_to_db = require('./mongoose_config')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listening on port 4k')
});