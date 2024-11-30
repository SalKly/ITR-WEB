import { useState, useEffect } from "react";
import axios from "axios";
import { useZodParser } from "./useZodParser";
import { Location, WeatherData, WeatherDataSchema } from "../models/Weather";

interface UseWeatherReturn {
  weatherData: WeatherData | null;
  error: string | null;
  location: Location | null;
  getWeatherData: () => void;
  permissionError: boolean;
}

const useWeather = (apiKey: string): UseWeatherReturn => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [permissionError, setPermissionError] = useState(false);
  const { triggerParser } = useZodParser();

  const fetchWeather = (latitude: number, longitude: number) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ar`)
      .then((response) => {
        const parsedResponse = triggerParser(response.data, WeatherDataSchema);
        setWeatherData(parsedResponse);
      })
      .catch(() => {
        setError("Error fetching weather data");
      });
  };

  const getWeatherData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchWeather(latitude, longitude);
        },
        () => {
          setPermissionError(true);
          setError("Unable to retrieve your location");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  };
  useEffect(() => {
    getWeatherData();
  }, [apiKey]);

  return { weatherData, error, location, getWeatherData, permissionError };
};

export default useWeather;
