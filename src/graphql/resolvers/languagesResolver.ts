import { GraphQLFieldResolver } from "graphql";
import { IContext } from "./context";

export const languageResolver: GraphQLFieldResolver<any, IContext> = async () => {
  return ["en", "uk"];
};
