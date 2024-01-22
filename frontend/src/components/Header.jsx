import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/userContext";
import {
  IconHamburger,
  IconLogo,
  IconSearch,
  IconUser,
  Ping,
} from "./utils/Icons";
import { LogoLink } from "./page/Footer";

const Header = () => {
  const { user, name } = useContext(UserContext);
  return (
    <>
      <header className="p-2 px-4 flex items-center justify-between tracking-wider border-b-2 sm:text-sm">
      <LogoLink />
        <section className="flex p-2 items-center border gap-2 rounded-full shadow-md text-[.7rem] shadow-gray-300 capitalize transition ease-in-out delay-150 hover:scale-110 sm:text-sm tracking-widest hover:shadow-[#00000031]">
          <div>anywhere</div>
          <div className="border h-[1.4rem] border-l border-gray-400"></div>
          <div>week add</div>
          <div className="border h-[1.4rem] border-l border-gray-400"></div>
          <div>guests</div>
          <button className="bg-red-500 p-1 rounded-full text-white">
            <IconSearch />
          </button>
        </section>
        <section className="flex p-2 items-center border gap-2 rounded-full shadow-md shadow-gray-300 hover:shadow-[#00000031] transition ease-in-out delay-150">
          <Link>
            <IconHamburger />
          </Link>
          <Link
            to={user ? "/account" : "/login"}
            href=""
            className="flex capitalize transition ease-in-out delay-150 hover:scale-110 tracking-widest hover:shadow-[#00000031]"
          >
            <IconUser />
            {name}
            {name && <Ping />}
          </Link>
        </section>
      </header>
    </>
  );
};

export default Header;
