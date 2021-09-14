const { ApolloServer, gql } = require("apollo-server");
const products = require("./modules/Products");
const reviews = require("./modules/Reviews");

const typeDef = gql`
  scalar Date
`;

const typeDefs = [typeDef, products.typeDef, reviews.typeDef];
const resolvers = [products.resolvers, reviews.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
