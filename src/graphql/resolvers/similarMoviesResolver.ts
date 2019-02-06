import { GraphQLFieldResolver } from "graphql";
import { IContext } from "./context";

export const similarMoviesResolver: GraphQLFieldResolver<any, IContext> = async (_source, args, context) => {
  return context.dataSources.tmdbAPI.getSimilarMovies(args.id, args.language);
};
