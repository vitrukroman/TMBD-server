import { GraphQLFieldResolver } from "graphql";
import { IContext } from "./context";

export const movieResolver: GraphQLFieldResolver<any, IContext> = async (_source, args, context) => {
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
