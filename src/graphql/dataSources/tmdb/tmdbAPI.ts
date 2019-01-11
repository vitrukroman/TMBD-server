import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import serverConfig from "../../../serverConfig";

class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.tmdbAPIUrl;
  }

  public async getMovie(id: number) {
    return await this.get(`movie/${id}`);
  }

  public async getPopularMovies(page = 1) {
    const data = await this.get("movie/popular", {
      language: "en-US",
      page,
    });
    return data.results;
  }

  public async getMovieKeywords(id: number) {
    return await this.get(`movie/${id}/keywords`);
  }

  public async getSimilarMovies(id: number) {
    return await this.get(`movie/${id}/similar`);
  }

  public async getMovieCredits(id: number) {
    return await this.get(`movie/${id}/credits`);
  }

  public async getMovieImages(id: number) {
    return await this.get(`movie/${id}/images`);
  }

  public async getConfiguration() {
    return await this.get(`configuration`);
  }

  protected willSendRequest(request: RequestOptions) {
    request.params.set("api_key", serverConfig.tmdbAPIKey);
  }
}

export default TmdbAPI;
