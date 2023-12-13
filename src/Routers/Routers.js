import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Showroom from "../Pages/Showroom";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserCobinet from "../Pages/UserCobinet";
import NotFound from "../Pages/NotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="showroom" element={<Showroom />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="userCobinet" element={<UserCobinet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
