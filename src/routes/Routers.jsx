import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Auth from "../pages/Auth/Auth";
import Detail from "../pages/Detail/Detail";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Explore from "../pages/Explore/Explore";
import Profile from "../pages/Profile/Profile";
import Wishlist from "../pages/Wishlist/Wishlist";
import Collection from "../pages/Collection/Collection";

function Routers() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/explore/:id" element={<Detail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Routers;
