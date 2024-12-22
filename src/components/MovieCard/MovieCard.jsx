import React, { useEffect, useState } from "react";
import StarIcon from "../../assets/icons/StarIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import PlusLinearIcon from "../../assets/icons/PlusLinearIcon";
import LikeLinearIcon from "../../assets/icons/LikeLinearIcon";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import {
  addItemToCollection,
  removeItemFromCollection,
} from "../../features/collection/collectionSlice";

function MovieCard({ listItem, link }) {
  const { user } = useUser();
  const wishlist = useSelector((state) => state.wishlist.value);
  const collection = useSelector((state) => state.collection.value);
  const dispatch = useDispatch();

  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.filter((wishlistItem) => wishlistItem.id === listItem.id).length
  );
  const [isInCollection, setIsInCollection] = useState(
    collection.filter((collectionItem) => collectionItem.id === listItem.id)
      .length
  );
  const navigate = useNavigate();
  const formattedPopularity =
    listItem?.popularity >= 1000
      ? (Number(listItem?.popularity) / 1000).toFixed(1).replace(/\.0$/, "") +
        "k"
      : Number(listItem?.popularity).toFixed(0);

  const formattedVoteAverage = Number(listItem?.vote_average).toFixed(1);

  useEffect(() => {
    if (user) {
      const currentWishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];
      const currentCollection =
        JSON.parse(localStorage.getItem("collection")) || [];
      setIsInWishlist(currentWishlist.some((item) => item.id === listItem.id));
      setIsInCollection(
        currentCollection.some((item) => item.id === listItem.id)
      );
    }
  }, [user, listItem]);

  useEffect(() => {
    if (wishlist) {
      setIsInWishlist(
        wishlist.filter((wishlistItem) => wishlistItem.id === listItem.id)
          .length
      );
    }
  }, [wishlist]);

  useEffect(() => {
    if (collection) {
      setIsInCollection(
        collection.filter((collectionItem) => collectionItem.id === listItem.id)
          .length
      );
    }
  }, [collection]);

  const addToWishlist = (item) => {
    const isExist = wishlist.some(
      (wishlistItem) => wishlistItem.id === item.id
    );
    if (user) {
      if (!isExist) {
        dispatch(addItemToWishlist(item));
        const updatedWishlist = [...wishlist, item];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setIsInWishlist(true);
      } else {
        dispatch(removeItemFromWishlist(item));
        const updatedWishlist = wishlist.filter(
          (wishlistItem) => wishlistItem.id !== item.id
        );
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setIsInWishlist(false);
      }
    } else {
      navigate("/login");
    }
  };
  const addToCollection = (item) => {
    const isExist = collection.some(
      (collectionItem) => collectionItem.id === item.id
    );
    if (user) {
      if (!isExist) {
        dispatch(addItemToCollection(item));
        const updatedCollection = [...collection, item];
        localStorage.setItem("collection", JSON.stringify(updatedCollection));
        setIsInCollection(true);
      } else {
        dispatch(removeItemFromCollection(item));
        const updatedCollection = collection.filter(
          (collectionItem) => collectionItem.id !== item.id
        );
        localStorage.setItem("collection", JSON.stringify(updatedCollection));
        setIsInCollection(false);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-dark-10 rounded-xl border border-dark-15 p-4 flex flex-col gap-4 group">
      <div className="relative h-56 sm:h-64 desktop:h-[328px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${listItem?.poster_path}`}
          alt={listItem?.title + " Thumbnail" || "Movie Thumbnail"}
        />
        <div className="absolute right-3 top-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={() => addToCollection(listItem)}
            className={`w-12 h-12 border rounded-full flex items-center justify-center !stroke-white duration-300 ${
              isInCollection
                ? "bg-blue-600 text-white border-blue-800 hover:!bg-blue-500 hover:!border-blue-500"
                : "bg-dark-06 border-dark-15 hover:!bg-dark-10 hover:!border-dark-30"
            }`}
          >
            <PlusLinearIcon />
          </Button>
          <Button
            onClick={() => addToWishlist(listItem)}
            className={`w-12 h-12 border rounded-full flex items-center justify-center !stroke-white duration-300 ${
              isInWishlist
                ? "bg-primary-45 text-white border-primary-60 hover:!bg-primary-60 hover:!border-primary-60"
                : "bg-dark-06 border-dark-15 hover:!bg-dark-10 hover:!border-dark-30"
            }`}
          >
            <LikeLinearIcon />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-h-56">
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
    </div>
  );
}

export default MovieCard;
