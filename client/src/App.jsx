import React, { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    // Fetch IP address from the backend API
    axios
      .get("/api/get-ip")
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);
console.log(ip);

  return (
    <div>
      <h1>Your IP Address is: {ip}</h1>
    </div>
  );
};

export default App;
