import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import serverConfig from "../../../serverConfig";

class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.tmdbAPIUrl;
  }

  public async getMovie(id: number, language: string) {
    return await this.get(`movie/${id}?language=${language}`);
  }

  public async getPopularMovies(page = 1) {
    const data = await this.get("movie/popular", {
      language: "en-US",
      page,
    });
    return data.results;
  }

  public async getMovieKeywords(id: number, language: string) {
    return await this.get(`movie/${id}/keywords?language=${language}`);
  }

  public async getSimilarMovies(id: number, language: string) {
    return await this.get(`movie/${id}/similar?language=${language}`);
  }

  public async getMovieCredits(id: number) {
    return await this.get(`movie/${id}/credits`);
  }

  public async getMovieImages(id: number, language: string) {
    return await this.get(`movie/${id}/images?language=${language}`);
  }

  public async getConfiguration() {
    return await this.get(`configuration`);
  }

  protected willSendRequest(request: RequestOptions) {
    request.params.set("api_key", serverConfig.tmdbAPIKey);
  }
}

export default TmdbAPI;
