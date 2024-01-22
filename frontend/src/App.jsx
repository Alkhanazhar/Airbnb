import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Index from "./components/page/Index";
import Register from "./components/Register";
import "./App.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Account from "./components/page/Account";
import PlacesAdd from "./components/page/PlacesAdd";
import Place from "./components/page/Place";
import PageNotFound from "./components/page/PageNotFound";
import BookingPage from "./components/page/BookingPage";
import BookingsPage from "./components/page/BookingsPage";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Layout>
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/:subpage?" element={<Account />} />
        <Route path="/account/places/:updateId" element={<PlacesAdd />} />
        <Route path="/account/:subpage/:action" element={<Account />} />
        <Route path="/account/bookings" element={<BookingsPage />} />
        <Route path="/account/bookings/:id" element={<BookingPage />} />
        <Route path="index/:id" element={<Place />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
