import React from "react";

const Forecast = ({ title }) => {
  return (
    <>
      <div className="text-white font-large text-2xl mt-6">{title}</div>
      <hr />
      <div className="flex flex-row items-center justify-between text-white my-4">
        <div className="flex flex-col items-center justify-center">
          <p>Wed</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20"
          />
          <p>20°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Wed</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20"
          />
          <p>20°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Wed</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20"
          />
          <p>20°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Wed</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20"
          />
          <p>20°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Wed</p>
          <img
            className="w-20"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p>20°</p>
        </div>
      </div>
    </>
  );
};

export default Forecast;
