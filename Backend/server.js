const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const UserRoutes = require("./routes/userRoutes");
const TripRoutes = require("./routes/tripRoutes");
const PackingItemRoutes = require("./routes/packingItemRoutes");

dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.DB_URL)
.then(() => {
  console.log("MongoDB is connected");
})
.catch((error) => {
  console.error("Failed to connect to MongoDB:", error.message);
});

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Baggitup Backend API!");
});

// Routes
app.use("/api/users", UserRoutes);
app.use("/api/trips", TripRoutes);
app.use("/api/packing-items", PackingItemRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
