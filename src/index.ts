import { ApolloServer, ServerInfo } from "apollo-server";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import TmdbAPI from "./graphql/dataSources/tmdb/tmdbAPI";
import { IContext } from "./graphql/resolvers/context";
import resolvers from "./graphql/resolvers/resolvers";
import logger from "./logger";
import serverConfig from "./serverConfig";

const typeDefs = require("./graphql/schema/schema.graphql");

const server = new ApolloServer({
  typeDefs, resolvers, dataSources: (): DataSources<IContext> => {
    return {
      tmdbAP2I: new TmdbAPI(),
    };
  },
});

server.listen(serverConfig.port)
.then((serverInfo: ServerInfo) => {
  logger.info("server ready at " + serverInfo.url);
});
