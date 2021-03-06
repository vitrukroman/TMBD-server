import { GraphQLFieldResolver } from "graphql";
import { IContext } from "./context";

export const movieResolver: GraphQLFieldResolver<any, IContext> = async (_source, args, context) => {
  const results = await Promise.all([
    context.dataSources.tmdbAPI.getMovie(args.id, args.language),
    context.dataSources.tmdbAPI.getMovieKeywords(args.id, args.language),
    context.dataSources.tmdbAPI.getSimilarMovies(args.id, args.language),
    context.dataSources.tmdbAPI.getMovieCredits(args.id),
    context.dataSources.tmdbAPI.getMovieImages(args.id, args.language),
  ]);

  return {
    ...results[0],
    keywords: results[1].keywords,
    similarMovies: results[2].results,
    cast: results[3].cast,
    crew: results[3].crew,
    images: results[4],
  };
};
