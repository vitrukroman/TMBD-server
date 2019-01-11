import { configurationResolver } from "./configurationResolver";
import { movieResolver } from "./movieResolver";

export default {
  Query: {
    movie: movieResolver,
    movies: () => [],
    configuration: configurationResolver,
  },
};
