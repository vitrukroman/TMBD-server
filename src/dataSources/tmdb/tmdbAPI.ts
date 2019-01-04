import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import serverConfig from "../../serverConfig";

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

  protected willSendRequest(request: RequestOptions) {
    request.params.set("api_key", serverConfig.tmdbAPIKey);
  }
}

export default TmdbAPI;
