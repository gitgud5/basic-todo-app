import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Layout from "../layout";
import Login from "../login";
import MyName from "../myName";
import Signup from "../signup";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MyName />} />
        <Route path="/todo" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
