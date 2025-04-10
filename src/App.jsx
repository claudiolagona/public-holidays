import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Countries } from "./components/Countries";
import { Holidays } from "./components/Holidays";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("");

  return (
    <>
      <Countries setCountry={setCountry} />
      {!country ? (
        <h2>Please select a country to view holidays.</h2>
      ) : (
        <Holidays country={country} />
      )}
    </>
  );
}

export default App;
