import { Button, Flex, Tooltip } from "antd";
import React from "react";
import PlayOutlinedIcon from "../../assets/icons/PlayOutlinedIcon";
import PlusLinearIcon from "../../assets/icons/PlusLinearIcon";
import LikeLinearIcon from "../../assets/icons/LikeLinearIcon";
import { useDispatch } from "react-redux";
import { setItemToVideo } from "../../features/video/videoSlice";

function MovieThumbnail({ movie, i }) {
  const dispatch = useDispatch();

  return (
    <div
      className="h-[468px] sm:h-[709px] desktop:h-[835px] w-full bg-no-repeat bg-cover bg-center relative rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : "https://via.placeholder.com/500x600?text=No+Image"
        })`,
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-dark-08"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90"></div>
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-full text-center px-10 flex flex-col gap-[20px] ${
          typeof i === "number" ? "bottom-20 desktop:bottom-28" : "bottom-10"
        }`}
      >
        <Flex vertical align="center" className="gap-5 sm:gap-[30px]">
          <Flex vertical gap={8}>
            <h1 className="text-2xl desktop:text-4xl font-bold">
              {movie?.title}
            </h1>
            <p className="hidden sm:block desktop:text-lg desktop:font-medium text-gray-60">
              {movie?.overview}
            </p>
          </Flex>
          <Flex className="flex-col sm:flex-row gap-3 w-full items-center justify-center">
            <Button
              onClick={() => {
                dispatch(setItemToVideo({ id: movie.id, isActive: true }));
              }}
              className="rounded-lg w-full sm:w-fit px-6 py-6 h-14 font-semibold text-lg bg-primary-45 hover:!bg-primary-55 text-white border-transparent hover:!border-transparent hover:!text-white"
            >
              <PlayOutlinedIcon color={"#fff"} />
              Play Now
            </Button>
            <Flex className="gap-2 hidden sm:flex">
              <Tooltip title={"Add to collection"}>
                <Button className="rounded-lg w-14 h-14 bg-dark-06 border-transparent hover:!border-dark-30 hover:!bg-dark-10 border border-dark-15 !stroke-white">
                  <PlusLinearIcon />
                </Button>
              </Tooltip>
              <Tooltip title={"Add to favorites"}>
                <Button className="rounded-lg w-14 h-14 bg-dark-06 border-transparent hover:!border-dark-30 hover:!bg-dark-10 border border-dark-15 !stroke-white">
                  <LikeLinearIcon />
                </Button>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default MovieThumbnail;
