import React, { useEffect, useState } from "react";
import PlacesAdd from "./PlacesAdd";
import { Link, useParams } from "react-router-dom";
import { AddButton } from "./Perks";
import axios from "axios";
import toast from "react-hot-toast";

const Places = () => {
  const { action } = useParams();
  const [places, setPlaces] = useState([]);
  const getPlaces = async () => {
    try {
      const { data } = await axios.get("/places");
      setPlaces(data);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <>
      {action != "new" && (
        <div className="text-center">
          {places?.map((place) => {
            return (
              <Link to={"/account/places/" + place._id} key={place._id}>
                <div className="my-4 bg-gray-200 p-4 rounded-2xl flex">
                  <div className="min-w-32 flex h-32 rounded-xl ">
                    <img
                      className="object-fit rounded-xl"
                      src={"http://localhost:8080/uploads/" + place.photos[0]}
                      alt=""
                    />
                  </div>
                  <div className="ms-2">
                    <div className="mb-4 font-semibold">{place.title}</div>
                    <div className="mb-4 text-gray-900  text-sm">
                      {place.description.substring(0,200)}...
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          <AddButton />
        </div>
      )}
      {action == "new" && <PlacesAdd />}
    </>
  );
};

export default Places;
