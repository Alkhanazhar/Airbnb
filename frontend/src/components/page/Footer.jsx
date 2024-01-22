import React from "react";
import { Link } from "react-router-dom";
import { IconLogo } from "../utils/Icons";

const Footer = () => {
  return (
    <footer className="bg-white p-4 -mx-8 ">
      <div className="container mx-auto flex items-center gap-4 justify-around">
        <LogoLink />
        <p className="text-gray-600 text-center">
          AirBnc-book your favourite places
        </p>
      </div>
    </footer>
  );
};

export default Footer;

export const LogoLink = () => {
  return (
    <div className="flex gap-1 items-center ">
      <Link to={"/"} href="" className="flex gap-1 items-center">
        <IconLogo />
        <span className="md:text-2xl text-sm font-semibold">Air BnB</span>
      </Link>
    </div>
  );
};
