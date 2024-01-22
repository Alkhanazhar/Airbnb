import React from "react";
import { IconAddress } from "../utils/Icons";

const Location = ({ address }) => {
  return (
    <a
      href={"http://maps.google.com/?q=" + address}
      className="my-4 font-semibold underline flex gap-1 "
      target="_blank"
    >
      <IconAddress />
      {address}
    </a>
  );
};

export default Location;
