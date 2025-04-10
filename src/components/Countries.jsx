import { useEffect, useState } from "react";

export const Countries = ({ setCountry }) => {
  const [countries, setCountries] = useState([]);
  const url = "https://openholidaysapi.org/Countries";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(url);
        const countries = await res.json();
        if (!res.ok) throw new Error("Network response was not ok");
        setCountries(countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <select
        className="form-select form-select-lg"
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.isoCode}>
              {country.isoCode}
            </option>
          );
        })}
      </select>
    </div>
  );
};
