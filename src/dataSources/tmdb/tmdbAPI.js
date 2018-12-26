"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const serverConfig_1 = __importDefault(require("../../serverConfig"));
class TmdbAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig_1.default.tmdbAPIUrl;
    }
    willSendRequest(request) {
        request.params.set("api_key", serverConfig_1.default.tmdbAPIKey);
    }
    async getMovie(id) {
        return this.get(`movie/${id}`);
    }
    async getPopularMovies(page = 1) {
        const data = await this.get("movie/popular", {
            language: "en-US",
            page,
        });
        return data.results;
    }
}
exports.default = TmdbAPI;
