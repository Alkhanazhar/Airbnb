import React, { useState } from "react";
import { InputHeader } from "./Perks";
import axios from "axios";
import toast from "react-hot-toast";

const PhotoUpload = ({
  addedPhotos,
  setAddedPhotos,
  photoLink,
  setPhotoLink,
}) => {
  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: fileName } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    if (fileName) {
      console.log(fileName);
      setAddedPhotos((prev) => {
        return [...prev, fileName];
      });
      toast.success("Upload Success");
      setPhotoLink("");
    } else {
      toast.error("cant add photo");
    }
  }
  async function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/uploads", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }
  return (
    <>
      <InputHeader text={"Photos"} />
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          className="w-full rounded-full px-4 py-2 border flex-1"
          type="text"
          placeholder="add Photo link to add Photo"
        />
        <button
          onClick={addPhotoByLink}
          className="bg-red-500 text-white p-2 rounded-3xl flex-[.4]"
        >
          add-Photo
        </button>
      </div>
      <div className="mt-2 gap-1 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((photo, idx) => {
            return (
              <div className="h-32 flex" key={idx}>
                <img
                  className="rounded-2xl w-full object-cover"
                  src={"http://localhost:8080/uploads/" + photo}
                  alt=""
                  key={idx}
                />
              </div>
            );
          })}
        <label className="bg-gray-400 text-center w-full h-32 text-white rounded-2xl flex border mx-auto justify-center items-center cursor-pointer">
          <input
            type="file"
            multiple
            name=""
            className="hidden "
            id=""
            onChange={uploadPhoto}
          />
          upload photo
        </label>
      </div>
    </>
  );
};

export default PhotoUpload;
