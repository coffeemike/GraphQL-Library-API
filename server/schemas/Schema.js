const graphql = require('graphql')
const _ = require('lodash')
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLID } = graphql

//dummy
var books = [
    {name: 'Something Good', genre: 'Sci-fi', id:'1', authorid:'1'},
    {name: 'Surely youre joking', genre: 'Biography', id:'2', authorid:'2'},
    {name: 'Shut up', genre: 'Drama', id:'3', authorid:'3'},
    {name: 'Snibb Snabb', genre: 'Horror', id:'4', authorid:'3'},
    {name: 'Snib Snabb 2', genre: 'Horror', id:'5', authorid:'3'}
]

var authors = [
    {name: 'Bear Bangs', age: 38, id:'1'},
    {name: 'Richard Feynman', age: 110, id:'2'},
    {name: 'Rube Goldberg', age: 60, id:'3'},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent,args){
                return _.find(authors, {id:parent.authorid})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return _.filter(books, {authorid:parent.id})
            }
         }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
                // get data from source
                return _.find(books, { id: args.id })
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
                // get data from source
                return _.find(authors, { id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})