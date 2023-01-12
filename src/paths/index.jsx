import React from "react";
import { Route, Routes } from "react-router-dom";
import Expenses from "../expenses";
import Home from "../home";
import Layout from "../layout";
import Login from "../login";
import MyName from "../myName";
import Signup from "../signup";

export default function Paths() {
  return (
    <Routes>
      <Route  element={<Layout />}>
        <Route path="/" element={<MyName />} />
        <Route path="/todo" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
