import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatlocaltime, iconCode } from "../services/Weatherdata";
const TemperatureDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
  units,
}) => {
  return (
    <>
      <div className="desp flex items-center justify-center py-6 text-xl text-white">
        <p>{details}</p>
      </div>
      <div className="maindet items-center text-white py-3">
        <img src={iconCode(icon)} alt="" className="wicon w-20" />
        {units === "metric" && (
          <p className="temp text-5xl">{`${temp.toFixed()}°C`}</p>
        )}
        {units === "imperial" && (
          <p className="temp text-5xl">{`${temp.toFixed()}°F`}</p>
        )}
        <div className="extra flex flex-col text-white text-xl font-light">
          <div className="details flex flex-row items-center justify-center">
            <UilTemperature size={18} className=" mr-1" />
            Real feel:
            <span className=" font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="details flex flex-row items-center justify-center">
            <UilTear size={18} className=" mr-1" />
            Humidity:<span className=" font-medium ml-1">{humidity}%</span>
          </div>
          <div className="details flex flex-row items-center justify-center">
            <UilWind size={18} className=" mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {`${speed.toFixed()}`} km/h
            </span>
          </div>
        </div>
      </div>
      <div className="maincon flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <div className="flex flex-col justify-center items-center">
          <UilSun size={18} />
          Rise:{" "}
          <span className="time font-medium ml-1">
            {formatlocaltime(sunrise, timezone, "hh:mm a")}
          </span>
        </div>
        <p className="sep font-light">|</p>
        <div className="flex flex-col justify-center items-center">
          <UilSunset size={18} />
          Set:{" "}
          <span className="time font-medium ml-1">
            {formatlocaltime(sunset, timezone, "hh:mm a")}
          </span>
        </div>
        <p className="sep font-light">|</p>
        <div className="flex flex-col justify-center items-center">
          <UilArrowUp size={18} />
          High:{" "}
          <span className="time font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </div>
        <p className="sep font-light">|</p>
        <div className="flex flex-col justify-center items-center">
          <UilArrowDown size={18} />
          Low:{" "}
          <span className="time font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </div>
      </div>
    </>
  );
};

export default TemperatureDetails;
