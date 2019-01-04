import { ApolloServer, ServerInfo } from "apollo-server";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { GraphQLFieldResolver } from "graphql";
import TmdbAPI from "./dataSources/tmdb/tmdbAPI";
import logger from "./logger";
import serverConfig from "./serverConfig";

const typeDefs = require("./schema/schema.graphql");

const movieResolver: GraphQLFieldResolver<any, IContext> = (_source, args, context) => {
  return context.dataSources.tmdbAPI.getMovie(args.id);
};

const resolvers = {
  Query: {
    movie: {
      resolve: movieResolver,
    },
    movies: () => [],
  },
};

interface IContext {
  dataSources: {
    tmdbAPI: TmdbAPI;
  };
}

const server = new ApolloServer({
  typeDefs, resolvers, dataSources: (): DataSources<IContext> => {
    return {
      tmdbAPI: new TmdbAPI(),
    };
  },
});

server.listen(serverConfig.port)
.then((serverInfo: ServerInfo) => {
  logger.info("server ready at " + serverInfo.url);
});
