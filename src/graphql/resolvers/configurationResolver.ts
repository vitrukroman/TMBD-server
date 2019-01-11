import { GraphQLFieldResolver } from "graphql";
import { IContext } from "./context";

export const configurationResolver: GraphQLFieldResolver<any, IContext> = async (_source, _args, context) => {
  return context.dataSources.tmdbAPI.getConfiguration();
};
