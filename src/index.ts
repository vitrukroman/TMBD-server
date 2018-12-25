import { ApolloServer, gql, ServerInfo } from "apollo-server";
import logger from "./logger";
import serverConfig from "./serverConfig";

const typeDefs = gql`

  `;

const resolvers = {};

const server = new ApolloServer({typeDefs, resolvers});

server.listen(serverConfig.url)
.then((serverInfo: ServerInfo) => {
  logger.info("server ready at ", serverInfo.url);
});
