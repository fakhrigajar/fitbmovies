import React, { useEffect, useState } from "react";
import MoviesHero from "../../components/MoviesHero/MoviesHero";
import MoviesListSection from "../../components/MoviesListSection/MoviesListSection";
import axios from "axios";
import { baseUrl } from "../../constants";
import { useSelector } from "react-redux";

function Movies() {
  const popularMoviesUrl = "movie/popular?language=en-US&page=1";
  const nowPlayingUrl = "movie/now_playing?language=en-US&page=1";
  const upcomingUrl = "movie/upcoming?language=en-US&page=1";
  const topRatedUrl = "movie/top_rated?language=en-US&page=1";

  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayings, setNowPlayings] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [topRateds, setTopRateds] = useState([]);
  const wishlist = useSelector((state) => state.wishlist.value);

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

  return (
    <main>
      <MoviesHero />
      <div className="px-[40px]">
        <MoviesListSection list={popularMovies} title="Popular movies" />
        <MoviesListSection list={nowPlayings} title="Now Playing" />
        <MoviesListSection list={upcomings} title="Upcoming" />
        <MoviesListSection list={topRateds} title="Top Rated" />
      </div>
    </main>
  );
}

export default Movies;
