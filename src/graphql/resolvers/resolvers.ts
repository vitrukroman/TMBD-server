import { configurationResolver } from "./configurationResolver";
import { languageResolver } from "./languagesResolver";
import { movieResolver } from "./movieResolver";

export default {
  Query: {
    movie: movieResolver,
    movies: () => [],
    configuration: configurationResolver,
    languages: languageResolver,
  },
};
