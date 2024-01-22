import { useState } from "react";
import { differenceInBusinessDays, differenceInCalendarDays } from "date-fns";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const navigate = useNavigate();
  // const [numberOfNights, setNumberOfNights] = useState(0)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  //   const [redirect, setRedirect] = useState("");
  //   const { user } = useContext(UserContext);

  //   useEffect(() => {
  //     if (user) {
  //       setName(user.name);
  //     }
  //   }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookThisPlace() {
    console.log({
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      place: place._id,
      price: numberOfNights * place.price,
    });
    const response = await axios.post("/bookings", {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      place: place._id,
      price: numberOfNights * place.price,
    });
    const bookingId = response.data._id;
    navigate(`/account/bookings/${bookingId}`);
  }


  return (
    <div className="boder mt-4 rounded-2xl relative ">
      <div className="text-xl font-bold text-center">
        Price : {place.price} $ / Day
      </div>
      <div className="flex">
        <div className="py-3 px-4">
          <label htmlFor="checkIn" >checkIn</label>
          <input className="cursor-pointer"
            type="date"
            name=""
            id=""
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="py-3 px-4">
          <label htmlFor="checkout" >checkout</label>
          <input className="cursor-pointer"
            type="date"
            name=""
            id=""
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>
      {checkOut && checkIn && (
        <>
          <div className="capitalize ">
            <h1>number of guests</h1>
            <input
              type="number"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="border border-l px-4 py-2 w-full my-2"
            />
          </div>{" "}
          <div className="capitalize ">
            <h1>Your full Name</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-l px-4 py-2 w-full my-2"
            />
          </div>{" "}
          <div className="capitalize ">
            <h1>phone</h1>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-l px-4 py-2 w-full"
            />
          </div>
        </>
      )}
      {checkIn && checkOut && (
        <div className="text-sm mt-4 font-bold text-center">
          you have to pay &nbsp;
          {checkIn && checkOut && numberOfNights * place.price} $ for{" "}
          {numberOfNights} night's
        </div>
      )}
      <button onClick={bookThisPlace}
        disabled={
          !checkIn || !checkOut ? true : false
        }
        className="bg-red-500 text-white m-auto w-full mt-4 rounded-2xl py-3 px-4 "
      >
        submit
      </button>
    </div>
  );
}
