const mongoose = require('mongoose')

mongoose.connect('mongodb://mikkel:Passord123@ds259410.mlab.com:59410/gql-library')
mongoose.connection.once('open', () => {
    console.log("yo")
})

module.exports = mongoose