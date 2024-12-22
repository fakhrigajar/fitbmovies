import React, { useEffect, useState } from "react";
import MoviesHero from "../../components/MoviesHero/MoviesHero";
import MoviesListSection from "../../components/MoviesListSection/MoviesListSection";
import axios from "axios";
import { baseUrl } from "../../constants";

function Movies() {
  const popularMoviesUrl = "movie/popular?language=en-US&page=1";
  const nowPlayingUrl = "movie/now_playing?language=en-US&page=1";
  const upcomingUrl = "movie/upcoming?language=en-US&page=1";
  const topRatedUrl = "movie/top_rated?language=en-US&page=1";

  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayings, setNowPlayings] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [topRateds, setTopRateds] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${popularMoviesUrl}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => setPopularMovies(res.data.results));
    axios
      .get(`${baseUrl}/${nowPlayingUrl}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => setNowPlayings(res.data.results));
    axios
      .get(`${baseUrl}/${upcomingUrl}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => setUpcomings(res.data.results));
    axios
      .get(`${baseUrl}/${topRatedUrl}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => setTopRateds(res.data.results));
  }, []);

  popularMovies.map((popularMovie, i) =>
    console.log(i, popularMovie.backdrop_path)
  );

  return (
    <main>
      <MoviesHero />
      <MoviesListSection
        list={popularMovies}
        title="Popular movies"
        link="/popular-movies"
      />
      <MoviesListSection
        list={nowPlayings}
        title="Now Playing"
        link="/now-playing"
      />
      <MoviesListSection list={upcomings} title="Upcoming" link="/upcoming" />
      <MoviesListSection list={topRateds} title="Top Rated" link="/top-rated" />
    </main>
  );
}

export default Movies;
