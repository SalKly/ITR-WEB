import clearDay from "/weather/clear-day.png";
import clearNight from "/weather/clear-night.png";
import cloudy from "/weather/cloudy.png";
import fog from "/weather/fog.png";
import heavyShowers from "/weather/heavy-showers.png";
import heavySleet from "/weather/heavy-sleet.png";
import overcast from "/weather/overcast.png";
import partlyCloudDay from "/weather/partly-cloudy-day.png";
import partlyCloudNight from "/weather/partly-cloudy-night.png";
import showers from "/weather/showers.png";
import sleet from "/weather/sleet.png";
import snow from "/weather/snow.png";
import sunny from "/weather/sunny.png";
import thunderstormShowers from "/weather/thunderstorm-showers.png";
import thunderstormShow from "/weather/thunderstorm-snow.png";
import windy from "/weather/windy.png";

export const weatherIconMap: Record<string, string> = {
  "01d": clearDay,
  "01n": clearNight,
  "02d": partlyCloudDay,
  "02n": partlyCloudNight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": overcast,
  "04n": overcast,
  "09d": heavyShowers,
  "09n": heavyShowers,
  "10d": showers,
  "10n": showers,
  "11d": thunderstormShowers,
  "11n": thunderstormShowers,
  "13d": snow,
  "13n": snow,
  "50d": fog,
  "50n": fog,
  "200": thunderstormShow,
  "201": thunderstormShow,
  "202": thunderstormShow,
  "210": thunderstormShow,
  "211": thunderstormShow,
  "212": thunderstormShow,
  "221": thunderstormShow,
  "230": thunderstormShow,
  "231": thunderstormShow,
  "232": thunderstormShow,
  "300": heavySleet,
  "301": heavySleet,
  "302": heavySleet,
  "310": heavySleet,
  "311": heavySleet,
  "312": heavySleet,
  "313": heavySleet,
  "314": heavySleet,
  "321": heavySleet,
  "600": sleet,
  "601": sleet,
  "602": sleet,
  "611": sleet,
  "612": sleet,
  "613": sleet,
  "615": sleet,
  "616": sleet,
  "620": sleet,
  "621": sleet,
  "622": sleet,
  "721": windy,
  "731": windy,
  "741": windy,
  "751": windy,
  "761": windy,
  "762": windy,
  "771": windy,
  "781": windy,
  "800": sunny,
};

export const getWeatherIcon = (id: string) => {
  return weatherIconMap[id] || `https://openweathermap.org/img/wn/${id}@2x.png`;
};
