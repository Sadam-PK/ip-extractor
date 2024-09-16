const express = require("express");
const requestIp = require("request-ip");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

// Middleware to capture user's IP address
app.use(requestIp.mw());

// Route to handle fetching the user's IP address and location details
app.get("/api/get-ip", async (req, res) => {
  try {
    // Get the client's IP address
    const userIp = req.clientIp || req.ip;
    console.log("User IP address:", userIp);

    // Replace with your ipinfo.io API token
    const ipInfoToken = "b64440296d0595";

    // Fetch location details based on IP address
    const response = await axios.get(
      `https://ipinfo.io/${userIp}/json?token=${ipInfoToken}`
    );
    const locationData = response.data;

    // Send the IP and location details as a JSON response
    res.json({ ip: userIp, location: locationData });
  } catch (error) {
    console.error("Error fetching location details:", error);
    res.status(500).json({ error: "Unable to fetch location details" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
