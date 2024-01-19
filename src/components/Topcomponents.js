import React from "react";

const Topcomponents = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
  ];
  return (
    <div className="maincities flex flex-row items-center justify-around">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium my-5"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default Topcomponents;
