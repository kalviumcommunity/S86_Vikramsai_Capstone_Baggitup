const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const UserRoutes = require("./routes/userRoutes");
const TripRoutes = require("./routes/tripRoutes");
const PackingItemRoutes = require("./routes/packingItemRoutes");

dotenv.config();

const app = express();

// MongoDB connection with detailed error logging
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((error) => {
    console.log("Failed to connect mongodb:", error);
  });

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", UserRoutes);
app.use("/api/trips", TripRoutes);
app.use("/api/packing-items", PackingItemRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
