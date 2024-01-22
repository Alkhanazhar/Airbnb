import React from "react";
import BookingDates from "./BookingDates";
import Location from "./Location";

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }
  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl">{booking.place.title}</h1>
        <Location className="my-2 block" address={booking.place.address} />

        <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl mb-4">Your booking information:</h2>
            <BookingDates booking={booking} />
          </div>
          <div className="bg-red-500 p-6 text-white rounded-2xl">
            <div>Total price</div>
            <div className="text-3xl">${booking.price}</div>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-2 relative lg:w-[70%] m-auto  lg:h-[70%]">
          {<PlaceImg place={place} index={0} />}
          <div className="grid">
            {<PlaceImg place={place} index={1} />}
            {<PlaceImg place={place} index={2} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
