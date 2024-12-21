import React, { Fragment, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function Layout() {
  const [loaderActive, setLoaderActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoaderActive(true);
    const timer = setTimeout(() => {
      setLoaderActive(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const formattedPath =
    location.pathname.replace("/", "").charAt(0).toUpperCase() +
    location.pathname.slice(2);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{formattedPath ? formattedPath : "Home"} - FITBMovies</title>
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
    </Fragment>
  );
}

export default Layout;
