import React, { Fragment, useEffect, useState } from "react";
import { StyledSection } from "../../assets/styles/styled.components";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Button, Input, Pagination } from "antd";
import { baseUrl } from "../../constants";
import SkeletonCard from "../../skeletons/SkeletonCard/SkeletonCard";
import Loader from "../../components/Loader/Loader";

function Explore() {
  const [pageCount, setPageCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [exploredList, setExploredList] = useState([]);
  const [total, setTotal] = useState({
    totalPages: 0,
    totalCount: 0,
  });
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E`,
    Accept: "application/json",
  };

  const fetchData = (url) => {
    axios
      .get(url, { headers })
      .then((res) => {
        setExploredList(res.data.results);
        setTotal({
          totalCount: res.data.total_results,
          totalPages: res.data.total_pages,
        });
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    const url = `${baseUrl}/trending/all/day?language=en-US&page=${pageCount}`;
    if (searchQuery.length <= 3 && pageCount === 1) {
      fetchData(url);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pageCount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length >= 3) {
        const url = `${baseUrl}/search/movie?include_adult=false&language=en-US&page=${pageCount}&query=${searchQuery}`;
        fetchData(url);
      } else if (!searchQuery) {
        const url = `${baseUrl}/trending/all/day?language=en-US&page=${pageCount}`;
        fetchData(url);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, pageCount]);
  return (
    <StyledSection className="!py-10">
      <div className="flex flex-col gap-2 sm:gap-4">
        <h1 className="sm:text-3xl desktop:text-5xl font-bold">
          Discover Your Next Movie!
        </h1>
        <p className="text-xs sm:text-base desktop:text-xl">
          Explore an extensive collection of movies and shows for every mood
        </p>
      </div>
      <div className="flex gap-5 sticky top-16 z-10 bg-dark-08 py-2">
        <Input
          value={searchQuery}
          onChange={(e) => {
            setPageCount(1);
            setSearchQuery(e.target.value);
          }}
          placeholder="Explore for movies..."
          type="text"
          className="py-4 !bg-dark-08 border placeholder:text-dark-30 border-dark-15 text-gray-99 hover:bg-dark-08 focus:!bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30"
        />
        <div className="hidden sm:flex items-center justify-between bg-dark-12 rounded-lg px-5 sm:min-w-56 desktop:min-w-[328px]">
          <p className="desktop:text-lg font-bold">Search result</p>
          <div className="flex items-center gap-1 text-gray-60">
            <span className="font-semibold">{total.totalCount}</span>
            <span className="hidden desktop:inline">Movies Found</span>
          </div>
        </div>
      </div>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
        className={`grid gap-5`}
      >
        {loading ? (
          <Fragment>
            {Array.from({ length: 20 }).map((_, index) => {
              return <SkeletonCard key={index} />;
            })}
          </Fragment>
        ) : (
          exploredList.length &&
          exploredList.map((item, i) => <MovieCard key={i} listItem={item} />)
        )}
      </div>
      {!loading && exploredList.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center w-full min-h-80">
          <Loader />
          {/* <h1 className="text-7xl">Ooops!</h1> */}
          {searchQuery && (
            <p className="text-lg">
              Sorry, we couldn't find any results for
              <strong>"{searchQuery}"</strong>.
            </p>
          )}

          <Button
            onClick={() => setSearchQuery("")}
            className="bg-primary-45 mt-2 !p-2 !px-4 h-fit text-xl font-bold text-white border-transparent hover:!bg-primary-55 hover:!text-white hover:!border-primary-55"
          >
            Search again
          </Button>
        </div>
      )}
      {exploredList.length !== 0 && (
        <Pagination
          className="mx-auto"
          defaultCurrent={1}
          onChange={(page) => {
            setPageCount(page);
          }}
          current={pageCount}
          showSizeChanger={false}
          pageSize={1}
          total={total.totalPages}
        />
      )}
    </StyledSection>
  );
}

export default Explore;
