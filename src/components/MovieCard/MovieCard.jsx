import React from "react";
import StarIcon from "../../assets/icons/StarIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import PlusLinearIcon from "../../assets/icons/PlusLinearIcon";
import LikeLinearIcon from "../../assets/icons/LikeLinearIcon";
import { Link } from "react-router-dom";

function MovieCard({ listItem, link }) {
  const formattedPopularity =
    listItem?.popularity >= 1000
      ? (Number(listItem?.popularity) / 1000).toFixed(1).replace(/\.0$/, "") +
        "k"
      : Number(listItem?.popularity).toFixed(0);

  const formattedVoteAverage = Number(listItem?.vote_average).toFixed(1);

  return (
    <div className="bg-dark-10 rounded-xl border border-dark-15 p-4 flex flex-col gap-4 group">
      <div className="relative h-[328px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${listItem?.poster_path}`}
          alt={listItem?.title + " Thumbnail" || "Movie Thumbnail"}
        />
        <div className="absolute right-3 top-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-12 h-12 bg-dark-06 border border-dark-15 rounded-full flex items-center justify-center hover:bg-dark-10 hover:border-dark-30 !stroke-white">
            <PlusLinearIcon />
          </button>
          <button className="w-12 h-12 bg-dark-06 border border-dark-15 rounded-full flex items-center justify-center hover:bg-dark-10 hover:border-dark-30 !stroke-white">
            <LikeLinearIcon />
          </button>
        </div>
      </div>

      <Link
        className="text-lg font-semibold text-white truncate hover:underline"
        title={listItem?.title}
        to={`${link}/${listItem?.id}`}
      >
        {listItem?.title}
      </Link>

      <div className="flex gap-2 justify-end">
        <div className="flex items-center gap-1 px-3 py-1.5 bg-dark-08 border border-dark-15 rounded-full">
          <StarIcon color={"#e30000"} />
          <p className="text-gray-60 text-sm">{formattedVoteAverage}</p>
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-dark-08 border border-dark-15 rounded-full">
          <EyeIcon className="text-blue-400" />
          <p className="text-gray-60 text-sm">{formattedPopularity}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
