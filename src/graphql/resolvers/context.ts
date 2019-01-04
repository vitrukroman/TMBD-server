import TmdbAPI from "../dataSources/tmdb/tmdbAPI";

export interface IContext {
  dataSources: {
    tmdbAPI: TmdbAPI;
  };
}
