const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const products = require("./modules/Products");
const reviews = require("./modules/Reviews");
const http = require("http");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");

(async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const typeDef = gql`
    scalar Date
  `;

  const schema = makeExecutableSchema({
    typeDefs: [typeDef, products.typeDef, reviews.typeDef],
    resolvers: [products.resolvers, reviews.resolvers],
  });

  const server = new ApolloServer({
    schema,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: server.graphqlPath,
    }
  );

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen({ port: process.env.PORT || 4000 });
})();
