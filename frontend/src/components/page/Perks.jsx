import React from "react";
import { Link } from "react-router-dom";
import {
  IconAdd,
  IconParking,
  IconPets,
  IconTv,
  IconWifi,
} from "../utils/Icons";

const Perks = ({ selected, onChange }) => {
  const handleChecked = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected].filter((item) => item != name));
    }
  };

  return (
    <>
      <h2 className="my-4 text-2xl">Perks</h2>
      <div className="w-full gap-2 grid grid-cols-2 lg:grid-cols-5 mt-2">
        <label className="border-2 border-l flex justify-around cursor-pointer items-center gap-2 border-gray-500 rounded-lg p-4">
          <input
            type="checkbox"
            name="wifi"
            id=""
            onClick={handleChecked}
            checked={selected.includes("wifi")}
          />
          <IconWifi />

          <span>wi-fi</span>
        </label>{" "}
        <label className="border-2 border-l flex justify-around cursor-pointer items-center gap-2 border-gray-500 rounded-lg p-4">
          <input
            checked={selected.includes("parking")}
            className="border border-gray-500"
            type="checkbox"
            onClick={handleChecked}
            name="parking"
            id=""
          />
          <IconParking />
          <span>parking</span>
        </label>
        <label className="border-2 border-l flex justify-around cursor-pointer items-center gap-2 border-gray-500 rounded-lg p-4">
          <input
            checked={selected.includes("tv")}
            className="border border-gray-500"
            type="checkbox"
            onClick={handleChecked}
            name="tv"
            id=""
          />
          <IconTv />
          <span>tv</span>
        </label>{" "}
        <label className="border-2 border-l flex justify-around cursor-pointer items-center gap-2 border-gray-500 rounded-lg p-4">
          <input
            checked={selected.includes("pets")}
            className="border border-gray-500"
            type="checkbox"
            onClick={handleChecked}
            name="pets"
            id=""
          />
          <IconPets />
          <span>pets</span>
        </label>{" "}
        <label className="border-2 border-l flex justify-around cursor-pointer items-center gap-2 border-gray-500 rounded-lg p-4">
          <input
            checked={selected.includes("private-entrance")}
            className="border border-gray-500"
            type="checkbox"
            name="private-entrance"
            onClick={handleChecked}
            id=""
          />
          <IconEntrence />

          <span>private-entrance</span>
        </label>
      </div>
    </>
  );
};

export function InputHeader({ text }) {
  return <h2 className="my-4 text-2xl">{text}</h2>;
}

export function AddButton() {
  return (
    <Link
      className="bg-red-500 inline-flex mt-8 px-6 py-2 text-white rounded-full"
      to={"/account/places/new"}
    >
      <IconAdd />
      add new places
    </Link>
  );
}

export function Image({ src, ...rest }) {
  src =
    src && src.includes("https://")
      ? src
      : "http://localhost:8080/uploads/" + src;
  return <img {...rest} src={src} alt={""} />;
}

export default Perks;
