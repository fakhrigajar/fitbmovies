import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Auth from "../pages/Auth/Auth";
import Detail from "../pages/Detail/Detail";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";

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
      <Route path="*" element={<Error />} />
      <Route path="/popular-movies/:id" element={<Detail />} />
      <Route path="/recommendations/:id" element={<Detail />} />
    </Routes>
  );
}

export default Routers;
