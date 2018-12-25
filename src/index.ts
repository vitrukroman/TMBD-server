import { ApolloServer, ServerInfo } from "apollo-server";
import logger from "./logger";
import serverConfig from "./serverConfig";

const typeDefs = require("./schema/schema.graphql");

const resolvers = {
  Query: {
    movies: () => [],
  },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen(serverConfig.port)
.then((serverInfo: ServerInfo) => {
  logger.info("server ready at " + serverInfo.url);
});
