"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const logger_1 = __importDefault(require("./logger"));
const serverConfig_1 = __importDefault(require("./serverConfig"));
const tmdbAPI_1 = __importDefault(require("./dataSources/tmdb/tmdbAPI"));
const typeDefs = require("./schema/schema.graphql");
const movieResolver = async (_source, args, context) => {
    return context.dataSources.tmdbAPI.getMovie(1);
};
const resolvers = {
    Query: {
        movie: movieResolver,
        movies: () => [],
    },
};
const server = new apollo_server_1.ApolloServer({
    typeDefs, resolvers, dataSources: () => {
        return {
            tmdbAPI: new tmdbAPI_1.default(),
        };
    },
});
server.listen(serverConfig_1.default.port)
    .then((serverInfo) => {
    logger_1.default.info("server ready at " + serverInfo.url);
});
