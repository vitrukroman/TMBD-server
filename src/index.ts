import { ApolloServer, ServerInfo } from "apollo-server";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { GraphQLFieldResolver } from "graphql";
import TmdbAPI from "./dataSources/tmdb/tmdbAPI";
import logger from "./logger";
import serverConfig from "./serverConfig";

const typeDefs = require("./schema/schema.graphql");

const movieResolver: GraphQLFieldResolver<any, IContext> = async (_source, args, context) => {
  const results = await Promise.all([
    context.dataSources.tmdbAPI.getMovie(args.id),
    context.dataSources.tmdbAPI.getMovieKeywords(args.id),
    context.dataSources.tmdbAPI.getSimilarMovies(args.id),
  ]);

  return {
    ...results[0],
    keywords: results[1].keywords,
    similarMovies: results[2].results,
  };
};

const resolvers = {
  Query: {
    movie: movieResolver,
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
