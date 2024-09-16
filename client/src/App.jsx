import React, { useEffect, useState } from "react";
import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const App = () => {
  const [ipData, setIpData] = useState({ ip: "", location: {} });

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}api/get-ip`)
      .then((response) => {
        setIpData({
          ip: response.data.ip,
          location: response.data.location,
        });
      })
      .catch((error) => {
        console.error("Error fetching IP address and location:", error);
      });
  }, []);

  const { ip, location } = ipData;
  console.log("data = " + ipData.location);
  console.log("data = " + ipData.location?.city);

  return (
    <div>
      <h1>Your IP Address is: {ip}</h1>
      <h2>Location Details:</h2>
      <p>City: {location?.city}</p>
      <p>Region: {location?.region}</p>
      <p>Country: {location?.country}</p>
      <p>Organization: {location?.org}</p>
    </div>
  );
};

export default App;