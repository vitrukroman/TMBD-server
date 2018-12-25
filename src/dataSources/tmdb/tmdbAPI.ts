import { RESTDataSource } from "apollo-datasource-rest";

class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://movies-api.example.com/";
  }

  public async getMovie(id) {
    return this.get(`movies/${id}`);
  }

  public async getMostViewedMovies(limit = 10) {
    const data = await this.get("movies", {
      per_page: limit,
      order_by: "most_viewed",
    });
    return data.results;
  }
}
