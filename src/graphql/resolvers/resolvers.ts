import { configurationResolver } from "./configurationResolver";
import { languageResolver } from "./languagesResolver";
import { movieResolver } from "./movieResolver";
import { similarMoviesResolver } from "./similarMoviesResolver";

export default {
  Query: {
    movie: movieResolver,
    movies: () => [],
    configuration: configurationResolver,
    languages: languageResolver,
    similarMovies: similarMoviesResolver,
  },
};
