import React, { useEffect, useState } from "react";
import { formatlocaltime } from "../services/Weatherdata";

const TimeandLocation = ({ weather: { dt, timezone, name, country } }) => {
  const [format, setFormat] = useState(
    "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
  );
  useEffect(() => {
    if (window.innerWidth < 500) {
      setFormat("dd LLL yyyy");
    }
  }, [window.innerWidth]);
  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-white font-light text-xl">
          {formatlocaltime(dt, timezone / 60, format)}
        </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <p className="country text-white font-medium text-3xl">{`${name}, ${country}`}</p>
      </div>
    </>
  );
};

export default TimeandLocation;
