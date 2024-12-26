import { Button, Flex, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import PlayOutlinedIcon from "../../assets/icons/PlayOutlinedIcon";
import PlusLinearIcon from "../../assets/icons/PlusLinearIcon";
import LikeLinearIcon from "../../assets/icons/LikeLinearIcon";
import { useDispatch, useSelector } from "react-redux";
import { setItemToVideo } from "../../features/video/videoSlice";
import {
  addItemToCollection,
  removeItemFromCollection,
} from "../../features/collection/collectionSlice";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function MovieThumbnail({ movie, i }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.value);
  const collection = useSelector((state) => state.collection.value);
  const { user } = useUser();
  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.some((wishlistItem) => wishlistItem.id === movie?.id).length
  );
  const [isInCollection, setIsInCollection] = useState(
    collection.some((collectionItem) => collectionItem.id === movie?.id).length
  );

  useEffect(() => {
    if (wishlist) {
      setIsInWishlist(
        wishlist.filter((wishlistItem) => wishlistItem.id === movie.id).length
      );
    }
  }, [wishlist]);

  useEffect(() => {
    if (collection) {
      setIsInCollection(
        collection.filter((collectionItem) => collectionItem.id === movie.id)
          .length
      );
    }
  }, [collection]);

  useEffect(() => {
    if (user) {
      const currentWishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];
      const currentCollection =
        JSON.parse(localStorage.getItem("collection")) || [];
      setIsInWishlist(currentWishlist.some((item) => item.id === movie.id));
      setIsInCollection(currentCollection.some((item) => item.id === movie.id));
    }
  }, [user, movie]);

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
              <Tooltip
                title={
                  isInCollection
                    ? "Remove from collection"
                    : "Add to collection"
                }
              >
                <Button
                  onClick={() => addToCollection(movie)}
                  className={`rounded-lg w-14 h-14 !stroke-white ${
                    isInCollection
                      ? "bg-blue-600 text-white border-blue-800 hover:!bg-blue-500 hover:!border-blue-500"
                      : "bg-dark-06 border-dark-15 hover:!bg-dark-10 hover:!border-dark-30"
                  }`}
                >
                  <PlusLinearIcon />
                </Button>
              </Tooltip>
              <Tooltip
                title={
                  isInWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Button
                  onClick={() => addToWishlist(movie)}
                  className={`rounded-lg w-14 h-14 !stroke-white ${
                    isInWishlist
                      ? "bg-primary-45 text-white border-primary-60 hover:!bg-primary-60 hover:!border-primary-60"
                      : "bg-dark-06 border-dark-15 hover:!bg-dark-10 hover:!border-dark-30"
                  }`}
                >
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
