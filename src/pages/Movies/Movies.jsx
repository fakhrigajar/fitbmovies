import React, { useEffect, useState } from "react";
import MoviesHero from "../../components/MoviesHero/MoviesHero";
import MoviesListSection from "../../components/MoviesListSection/MoviesListSection";
import axios from "axios";

function Movies() {
  const popularMoviesUrl =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const [popularMovies, setPopularMovies] = useState([1, 2, 2, 2]);

  useEffect(() => {
    axios
      .get(popularMoviesUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => setPopularMovies(res.data.results));
  }, []);
  return (
    <main>
      <MoviesHero />
      <MoviesListSection
        list={popularMovies}
        title="Popular movies"
        link="/popular-movies"
      />
    </main>
  );
}

export default Movies;
