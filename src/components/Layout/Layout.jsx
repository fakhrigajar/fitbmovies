import React, { Fragment, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { baseUrl } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setItemToCollection } from "../../features/collection/collectionSlice";
import { setItemToWishlist } from "../../features/wishlist/wishlistSlice";
import BottomBar from "../BottomBar/BottomBar";

function Layout() {
  const location = useLocation();
  const [loaderActive, setLoaderActive] = useState(false);
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
  const storedCollection = JSON.parse(localStorage.getItem("collection"));
  const dispatch = useDispatch();

  useEffect(() => {
    setLoaderActive(true);
    const timer = setTimeout(() => {
      setLoaderActive(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  useEffect(() => {
    if (storedCollection) {
      dispatch(setItemToCollection(storedCollection));
    }
    if (storedWishlist) {
      dispatch(setItemToWishlist(storedWishlist));
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
      {loaderActive && <Loader />}
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
      <Routers />
      <Footer />
      <BottomBar />
    </Fragment>
  );
}

export default Layout;
