import { ApolloServer, ServerInfo } from "apollo-server";
import logger from "./logger";
import serverConfig from "./serverConfig";
import TmdbAPI from "./dataSources/tmdb/tmdbAPI";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";

const typeDefs = require("./schema/schema.graphql");

const movieResolver = async <T, T1, T2>(_source: T, args: { id: string }, context: DataSources<IContext>) => {
  return context.dataSources.tmdbAPI.getMovie(1);
}

const resolvers = {
  Query: {
    movie: movieResolver,
    movies: () => [],
  },
};

interface IContext {
  tmdbAPI: TmdbAPI;
}

const server = new ApolloServer({
  typeDefs, resolvers, dataSources: (): DataSources<IContext> => {
    return {
      tmdbAPI: new TmdbAPI(),
    }
  },
});

server.listen(serverConfig.port)
.then((serverInfo: ServerInfo) => {
  logger.info("server ready at " + serverInfo.url);
});
