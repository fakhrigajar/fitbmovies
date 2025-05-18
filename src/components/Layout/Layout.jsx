import React, { Fragment, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { setItemToCollection } from "../../features/collection/collectionSlice";
import { setItemToWishlist } from "../../features/wishlist/wishlistSlice";
import BottomBar from "../BottomBar/BottomBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Aos from "aos";
import "aos/dist/aos.css";

function Layout() {
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
  const storedCollection = JSON.parse(localStorage.getItem("collection"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (storedCollection) {
      dispatch(setItemToCollection(storedCollection));
    }
    if (storedWishlist) {
      dispatch(setItemToWishlist(storedWishlist));
    }

    Aos.init({
      offset: 200,
      duration: 300,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FITBMovies</title>
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
