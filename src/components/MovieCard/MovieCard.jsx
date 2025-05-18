import React, { useEffect, useState } from "react";
import StarIcon from "../../assets/icons/StarIcon";
import PlusLinearIcon from "../../assets/icons/PlusLinearIcon";
import LikeLinearIcon from "../../assets/icons/LikeLinearIcon";
import { useNavigate } from "react-router-dom";
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

function MovieCard({ listItem }) {
  const { user } = useUser();
  const imageUrl = `https://image.tmdb.org/t/p/w500${listItem?.poster_path}`;
  const wishlist = useSelector((state) => state.wishlist.value);
  const collection = useSelector((state) => state.collection.value);
  const [imageIsValid, setImageIsValid] = useState(false);

  const dispatch = useDispatch();

  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.filter((wishlistItem) => wishlistItem.id === listItem.id).length
  );
  const [isInCollection, setIsInCollection] = useState(
    collection.filter((collectionItem) => collectionItem.id === listItem.id)
      .length
  );
  const navigate = useNavigate();

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

  const checkImageUrl = (url) => {
    const img = new Image();
    img.onload = () => setImageIsValid(true);
    img.onerror = () => setImageIsValid(false);
    img.src = url;
  };

  useEffect(() => {
    if (imageUrl) {
      checkImageUrl(imageUrl);
    }
  }, [imageUrl]);

  return (
    <div
      onClick={() => {
        navigate(`/explore/${listItem?.id}`);
      }}
      className="bg-dark-10 rounded-xl border border-dark-15 p-4 flex flex-col gap-4 group relative overflow-hidden"
      data-aos="zoom-in"
    >
      <div className="relative h-56 sm:h-64 desktop:h-[328px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={
            imageIsValid
              ? imageUrl
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
          }
          alt={listItem?.title + " Thumbnail" || "Movie Thumbnail"}
        />
        <div className="absolute right-3 top-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCollection(listItem);
            }}
            className={`w-12 h-12 border rounded-full flex items-center justify-center !stroke-white duration-300 ${
              isInCollection
                ? "bg-blue-600 text-white border-blue-800 hover:!bg-blue-500 hover:!border-blue-500"
                : "bg-dark-06 border-dark-15 hover:!bg-dark-10 hover:!border-dark-30"
            }`}
          >
            <PlusLinearIcon />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist(listItem);
            }}
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
      <div className="absolute top-0 left-0 flex gap-2 justify-end">
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-l-none bg-dark-10 rounded-full border-dark-15">
          <StarIcon color={"#e30000"} />
          <p className="text-gray-60 tex">{formattedVoteAverage}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
