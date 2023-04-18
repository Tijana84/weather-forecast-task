import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/api";

type WeatherData = {
  city: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
};

export const Home = () => {
  const navigate = useNavigate();
  const [weatheData, setWeatherData] = useState<WeatherData>({
    city: "",
    temp: 0,
    maxTemp: 0,
    minTemp: 0,
  });

  useEffect(() => {
    const getWeatherData = async () => {
      const response = await API.get(
        "/weather?q=kraljevo&appid=da019a5dac7d5e904feb04b3e197c9b6&units=metric"
      );

      setWeatherData({
        city: response.data.name,
        temp: response.data.main.temp,
        maxTemp: response.data.main.temp_max,
        minTemp: response.data.main.temp_min,
      });
    };

    getWeatherData();
  }, []);

  const handleSearch = () => {
    navigate("/search");
  };
  
  return (
    <div className="flex flex-col justify-center items-center md:w-full h-screen bg-blue-500">
      <div className="text-2xl font-bold mb-4" onClick={handleSearch}>
        {weatheData.city}
      </div>
      <div className="flex items-center justify-center mb-8">
        <div className="text-3xl font-bold">{weatheData.temp}&deg;C</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="text-lg font-semibold mb-2">Today's High</div>
          <div className="text-3xl font-bold">{weatheData.maxTemp}&deg;C</div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="text-lg font-semibold mb-2">Today's Low</div>
          <div className="text-3xl font-bold">{weatheData.minTemp}&deg;C</div>
        </div>
      </div>
    </div>
  );
};
