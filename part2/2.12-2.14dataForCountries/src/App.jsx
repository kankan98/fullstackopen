import { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "../components/CountryInfo";
function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  return (
    <>
      <p>
        find countries{" "}
        <input type="text" value={filter} onChange={handleChange} />
      </p>
      <div>
        {filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length === 1 ? (
          <CountryInfo country={filteredCountries[0]} />
        ) : (
          filteredCountries.map((country) => (
            <p key={country.name.common}>
              {country.name.common}
              <button onClick={() => setFilter(country.name.common)}>
                show
              </button>
            </p>
          ))
        )}
      </div>
    </>
  );
}

export default App;
