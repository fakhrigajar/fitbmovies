import React, { useState } from "react";
import { StyledSection } from "../../assets/styles/styled.components";
import { Button, Flex } from "antd";
import LeftLinearIcon from "../../assets/icons/LeftLinearIcon";
import RightLinearIcon from "../../assets/icons/RightLinearIcon";
import { useEffect } from "react";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import SkeletonThumbnail from "../../skeletons/SkeletonCard/SkeletonThumbnail/SkeletonThumbnail";

function MoviesHero() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const popularMoviesUrl =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  useEffect(() => {
    axios
      .get(popularMoviesUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setPopularMovies(res.data.results);
        setCurrentIndex(currentIndex);
      });
  }, []);

  return (
    <StyledSection className="!pt-5">
      <div className="relative w-full">
        {popularMovies.length ? (
          <Swiper
            className="mySwiper flex w-full custom-pagination relative rounded-xl"
            loop={popularMovies?.length > 2}
            navigation={{
              prevEl: ".swiper-custom-prev",
              nextEl: ".swiper-custom-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            initialSlide={0}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {popularMovies.map((movie, i) => (
              <SwiperSlide key={i}>
                <MovieThumbnail movie={movie} i={i} />
              </SwiperSlide>
            ))}

            <Flex
              className="hidden desktop:flex absolute w-full bottom-5 left-0 z-50 px-10"
              justify="space-between"
              align="center"
            >
              <Button className="swiper-custom-prev rounded-lg w-14 h-14 bg-dark-06 border-transparent hover:!border-dark-30 hover:!bg-dark-10 border border-dark-15 !stroke-white">
                <LeftLinearIcon />
              </Button>
              <Button className="swiper-custom-next rounded-lg w-14 h-14 bg-dark-06 border-transparent hover:!border-dark-30 hover:!bg-dark-10 border border-dark-15 !stroke-white">
                <RightLinearIcon />
              </Button>
            </Flex>
          </Swiper>
        ) : (
          <SkeletonThumbnail />
        )}
      </div>
    </StyledSection>
  );
}

export default MoviesHero;
