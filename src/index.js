const { ApolloServer, gql } = require("apollo-server");

const typeDef = gql`
  scalar Date
`;

const typeDefs = [typeDef];
const resolvers = [];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
