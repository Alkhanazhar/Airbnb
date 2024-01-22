import React from "react";

const PlaceImg = ({ place, index=0 }) => {
  return (
    place?.photos && (
      <div className="flex">
        {place?.photos?.[index] && (
          <img
            className="rounded-tr-xl aspect-square object-cover"
            src={`http://localhost:8080/uploads/${place?.photos?.[index]}`}
            alt=""
          />
        )}
      </div>
    )
  );
};

export default PlaceImg;
