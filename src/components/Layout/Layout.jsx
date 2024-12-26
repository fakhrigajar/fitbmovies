import React, { Fragment, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { baseUrl } from "../../constants";
import { useDispatch } from "react-redux";
import { setItemToCollection } from "../../features/collection/collectionSlice";
import { setItemToWishlist } from "../../features/wishlist/wishlistSlice";
import BottomBar from "../BottomBar/BottomBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { setItemToExplore } from "../../features/explore/exploreSlice";

function Layout() {
  const location = useLocation();
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
  const storedCollection = JSON.parse(localStorage.getItem("collection"));
  const storedExplore = JSON.parse(localStorage.getItem("explore"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (storedCollection) {
      dispatch(setItemToCollection(storedCollection));
    }
    if (storedWishlist) {
      dispatch(setItemToWishlist(storedWishlist));
    }
    if (storedExplore) {
      dispatch(setItemToExplore(storedExplore));
    }
  }, []);

  const formattedPath =
    location.pathname.replace("/", "").charAt(0).toUpperCase() +
    location.pathname.slice(2);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {/* {formattedPath !== ""
            ? `${formattedPath} - FITBMovies`
            : "Home - FITBMovies"} */}
          FITBMovies
        </title>
        <meta name="description" content={"Explore movies on FITBMovies."} />
      </Helmet>
      <Header />

      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            backgroundColor: "#262626",
            color: "#999999",
            borderRadius: 10,
            position: "relative",
            overflow: "hidden",
          },
        }}
        position="top-center"
        reverseOrder={true}
      />
      <VideoPlayer />
      <Routers />
      <Footer />
      <BottomBar />
    </Fragment>
  );
}

export default Layout;
