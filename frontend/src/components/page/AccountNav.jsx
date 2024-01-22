import React from "react";
import { Link } from "react-router-dom";
import { IconAccount, IconBookings, IconPlaces } from "../utils/Icons";

const AccountNav = ({ subpage }) => {
  const linkClasses = (type = null) => {
    let classes = "py-2 px-6 flex gap-1 transition ease-in-out delay-100";
    if (type === subpage) {
      classes += " bg-red-500 text-white rounded-3xl shadow-lg";
    }
    return classes;
  };
  return (
    <>
      <nav className="w-full md:text-xl flex justify-around mt-8 font-semibold ">
        <Link className={linkClasses("profile")} to={"/account"}>
          <IconAccount />
          My account
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          <IconBookings />
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          <IconPlaces />
          My accomodations
        </Link>
      </nav>
    </>
  );
};

export default AccountNav;
