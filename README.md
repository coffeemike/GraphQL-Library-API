# Project Title

GraphQL Library API built on node connected to mlabs.com for storage.
Based on The Net Ninja's GraphQL tutorials.

### Prerequisites

Node.
mlabs.com user/use the included dummy data.

### Installing

Not that much to explain here really, just install the dependencies and run the damn thing.

```
cd server
```
npm install

```
node server.js OR nodemon server.js (preferred but not needed)
```
localhost:4000/graphql to access the root node and the graphical "GraphiQL" api tool.
```
{
  author(id:3){
    name
    age
    books{
      name
      genre
    }
  }
}


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you https://www.thenetninja.co.uk/
