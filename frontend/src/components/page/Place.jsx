import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "./BookingWidget";
import { IconBooking, IconClose } from "../utils/Icons";
import PlaceImg from "./PlaceImg";
import Location from "./Location";
import Footer from "./Footer";

const Place = () => {
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [allPhotos, setAllPhotos] = useState(false);
  const handleSetAllPhotos = () => {
    setAllPhotos(!allPhotos);
  };
  const getSinglePlace = async () => {
    try {
      axios.get(`/all-places/${id}`).then((res) => {
        setPlace(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (!id) return;
    getSinglePlace();
  }, []);
  if (allPhotos)
    return (
      <div className="absolute top-0 left-0 p-8 text-white min-w-full min-h-full bg-black ">
        showing all photos
        <div className="grid gap-4 bg-black ">
          <h1 className="my-2 text-xl">{place.title}</h1>
          {place?.photos.length > 0 &&
            place.photos.map((photo, id) => {
              return (
                <img
                  className="rounded-xl m-auto w-11/12 object-cover lg:h-[50rem] aspect-square px-8"
                  key={id}
                  src={"http://localhost:8080/uploads/" + photo}
                />
              );
            })}
        </div>
        <button
          className="bg-[#00000081] flex gap-2 backdrop-blur-sm text-white border border-l py-1 px-4 rounded-md fixed top-8 right-8"
          onClick={handleSetAllPhotos}
        >
          <IconClose />
          close
        </button>
      </div>
    );
  return (
    <div className="bg-gray-200 p-8 -mx-4 ">
      <div className="container m-auto">
        <h1 className="text-3xl">{place.title}</h1>
        <Location address={place.address} />
        <div className="grid grid-cols-[2fr_1fr] gap-2 relative lg:w-[70%] m-auto h-[70%]">
          {<PlaceImg place={place} index={0} />}
          <div className="grid gap-2">
            {<PlaceImg place={place} index={1} />}
            {<PlaceImg place={place} index={2} />}
          </div>
          <button
            className="absolute flex gap-2 border py-2 px-4 bottom-2 right-2 bg-white rounded-md"
            onClick={handleSetAllPhotos}
          >
            <IconBooking />
            show more
          </button>
        </div>
        <div className="my-4 grid lg:grid-cols-[2fr_1fr] gap-4 mt-10 sm:grid-cols-1 md:grid-cols-2">
          <div className="leading-6 tracking-widest text-gray-600">
            <div className="my-4 px-8 py-2 -mx-8 ">
              <h1 className="text-xl font-semibold text-black">Description</h1>
              <p>{place.description}</p>
            </div>
            checkIn:{place.checkIn}
            <br />
            checkOut:{place.checkOut}
            <br />
            maxGuests:{place.maxGuests}
          </div>
          <div className="bg-white shadow p-4 rounded-2xl ">
            <BookingWidget place={place} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Place;
