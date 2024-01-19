import React, { useEffect, useState } from "react";
import Topcomponents from "./components/Topcomponents";
import Inputs from "./components/Inputs";
import TimeandLocation from "./components/TimeandLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import getFormattedData from "./services/Weatherdata";
function App() {
  const [query, setQuery] = useState({ q: "thrissur" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then((data) =>
        setWeather(data)
      );
    };
    fetchWeather();
  }, [query, units]);
  const formatbg = () => {
    if (!weather) return "sunny";
    const threshold = units === "metric" ? 30 : 86;
    if (weather.temp <= threshold) return "cold";
    return "sunny";
  };
  return (
    <div className={`${formatbg()}`}>
      <Topcomponents setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeandLocation weather={weather} />
          <TemperatureDetails weather={weather} units={units} />
        </div>
      )}
    </div>
  );
}

export default App;
