import axios from "axios";
import { useState, useEffect } from "react";

const CountryInfo = ({ country }) => {
  const [templature, setTemplature] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=5796abbde9106b7da4febfae8c44c232`
      )
      .then((res) => {
        console.log(res.data);
        setTemplature(res.data);
      });
  }, []);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h2>languages:</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} />
      <h1>Weather in {country.capital[0]}</h1>
      <p>templateure {templature?.current?.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${templature?.current?.weather[0]?.icon}@2x.png`}
        alt=""
      />
      <p>wind {templature?.current.wind_speed} m/s</p>
    </div>
  );
};

export default CountryInfo;
