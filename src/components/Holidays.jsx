// https://openholidaysapi.org/PublicHolidays?countryIsoCode=DE
import { useEffect, useState } from "react";

export const Holidays = ({ country }) => {
  const [holidays, setHolidays] = useState([]);
  const year = new Date().getFullYear();
  const url = `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${country}&validFrom=${year}-01-01&validTo=${year}-12-31`;

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch(url);
        const holidays = await response.json();
        if (!response.ok) throw new Error("Network response was not ok");
        setHolidays(holidays);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    fetchHolidays();
  }, [country, url]);

  return (
    <div>
      <h2>
        The Holidays in {country} for {year} are:
      </h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Holiday</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => {
            return (
              holiday.nationwide && (
                <tr key={index}>
                  <td>{holiday.startDate}</td>
                  <td>{holiday.name[0].text}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
