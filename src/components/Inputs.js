import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPinAlt } from "@iconscout/react-unicons";
const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };
  const handleSubmit = () => {
    setQuery({ q: city });
  };
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <form action="">
          <input
            value={city}
            placeholder="Search..."
            type="search"
            className="search text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none"
            onChange={(e) => setCity(e.currentTarget.value)}
          />
        </form>
        <button
          size={25}
          className="sicon text-white cursor-pointer transition:ease-out
          hover:scale-125"
          onClick={() => setQuery({ q: city })}
        >
          <UilSearch />
        </button>
        <button
          size={25}
          className="location text-white cursor-pointer transition:ease-out hover:scale-125"
          onClick={handleLocation}
        >
          <UilLocationPinAlt />
        </button>
      </div>
      <div className="metrics flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-white font-light text-xl transition:ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="font-light text-white text-xl  mx-2">|</p>
        <button
          name="imperial"
          className="text-white font-light text-xl transition:ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
