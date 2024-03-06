import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import "./App.css";
import SwitchButton from "./components/switchButton";
import { useState, useEffect } from "react";
import axios from 'axios';
import City from "./components/City";

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  const key = 'c5ca9e10861da806a3bc094508211a56';
  const { currentTheme } = useThemeSwitcher();
  console.log(currentTheme);

  useEffect(() => {
    if (!search) return; // Eğer arama boşsa, isteği yapmadan çık
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response.data);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div>
      <div className="main fade-in">
        <h1>The current theme is {currentTheme}</h1>
        <SwitchButton />
        <div className="int">
          <input onChange={(e) => setSearch(e.target.value)} className="border" type="text" />
          <City city={city} />
        </div>
      </div>
    </div>
  );
}

export default App;
