import { movieResolver } from "./movieResolver";

export default {
  Query: {
    movie: movieResolver,
    movies: () => [],
  },
};
