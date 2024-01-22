import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Perks, { InputHeader } from "./Perks";
import axios from "axios";
import PhotoUpload from "./PhotoUpload";
import toast from "react-hot-toast";

const PlacesAdd = () => {
  const location = useLocation();
  const { updateId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [price, setPrice] = useState(0);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState(1);
  const [checkOut, setCheckOut] = useState(1);
  const [maxGuests, setMaxGuests] = useState(1);

  const getSinglePlaces = async () => {
    try {
      const { data } = await axios.get("/places/" + updateId);
      setTitle(data.title);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setExtraInfo(data.extraInfo);
      setPerks(data.perks);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setAddress(data.address);
    } catch (error) {
      console.error(error.message, "error in getSinglePlaces");
    }
  };
  useEffect(() => {
    if (!updateId) return;
    getSinglePlaces();
      console.log(updateId);
  }, [updateId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateId) {
      console.log(updateId);
      const { data } = await axios.put("/edit-places/" + updateId, {
        title,
        photos: addedPhotos,
        description,
        extraInfo,
        price,
        perks,
        checkIn,
        checkOut,
        maxGuests,
      });

      navigate("/account/places");
      return console.log("submit event with Id");
    }
    else{
      try {
        const dataForm = {
          title: title,
          price: price,
          address: address,
          photos: addedPhotos,
          photoLink: photoLink,
          description: description,
          perks: perks,
          extraInfo: extraInfo,
          checkIn: checkIn,
          checkOut: checkOut,
          maxGuests: maxGuests,
        };
        const { data } = await axios.post("/places", dataForm);
        if (data.success) toast.success("places added successfully");
        navigate("/account/places");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/4 px-4 m-auto my-4 tracking-wider"
    >
      <InputHeader text={"Title"} />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-full px-4 py-2 border"
        type="text"
        placeholder="title"
      />{" "}
      <InputHeader text={"Price"} />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full rounded-full px-4 py-2 border"
        type="number"
        placeholder="Price for per night"
      />{" "}
      <InputHeader text={"Address"} />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full rounded-full px-4 py-2 border"
        type="text"
        placeholder="Address"
      />{" "}
      <PhotoUpload
        addedPhotos={addedPhotos}
        setAddedPhotos={setAddedPhotos}
        photoLink={photoLink}
        setPhotoLink={setPhotoLink}
      />
      <InputHeader text={"Description"} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-2xl px-4 py-2 border h-24"
        type="text"
        placeholder="Description"
      />
      <Perks selected={perks} onChange={setPerks} />
      <h2 className="my-4 text-2xl">Extra Info</h2>
      <textarea
        value={extraInfo}
        onChange={(e) => setExtraInfo(e.target.value)}
        className="w-full rounded-2xl px-4 py-2 border h-24"
        type="text"
        placeholder="text information"
      />
      <h2 className="my-4 text-2xl">Check In & out</h2>
      <div className="grid gap-2 sm:grid-cols-3">
        <div>
          <h3 className="my-2">Check in time</h3>
          <input
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-full px-4 py-2 border border-l"
            type="number"
            placeholder="14:00"
            value={checkIn}
          />
        </div>{" "}
        <div>
          <h3 className="my-2">Check out time</h3>
          <input
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-full px-4 py-2 border border-l"
            type="number"
            placeholder="21:00"
          />
        </div>{" "}
        <div>
          <h3 className="my-2">Max guest</h3>
          <input
            value={maxGuests}
            onChange={(e) => setMaxGuests(e.target.value)}
            className="w-full rounded-full px-4 py-2 border border-l"
            type="number"
          />
        </div>
      </div>
      <button className="bg-red-500 px-6 py-2 w-full rounded-full my-4 text-white text-2xl">
        save
      </button>
    </form>
  );
};

export default PlacesAdd;
