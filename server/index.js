const express = require("express");
const requestIp = require("request-ip");
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware to capture user's IP address
app.use(requestIp.mw());

// Route to handle fetching the user's IP address
app.get("/api/get-ip", (req, res) => {
  // Get the client's IP address
  const userIp = req.clientIp || req.ip;

  console.log("User IP address:", userIp);

  // Send the IP as a JSON response
  res.json({ ip: userIp });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
