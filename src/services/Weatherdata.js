import { DateTime } from "luxon";
const base_url = "https://api.openweathermap.org/data/2.5";
const getWeather = (type, params) => {
  const url = new URL(base_url + "/" + type);
  url.search = new URLSearchParams({
    ...params,
    appid: api,
  });
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
const formatWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    timezone,
    details,
    icon,
    speed,
  };
};
const getFormattedData = async (params) => {
  const formattedData = await getWeather("weather", params).then(formatWeather);
  return { ...formattedData };
};
const formatlocaltime = (secs, zone, format) =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const iconCode = (code) => {
  return `http://openweathermap.org./img/wn/${code}@2x.png`;
};
export { formatlocaltime, iconCode };
export default getFormattedData;
