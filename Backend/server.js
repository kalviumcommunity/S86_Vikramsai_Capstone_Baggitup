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

// Temporary route to test entity relationships
app.get("/api/test/relationships", async (req, res) => {
  const Trip = require("./models/Trip");
  const PackingItem = require("./models/PackingItem");

  try {
    // Populate userId on trips, only select name and email (no password or __v)
    const trips = await Trip.find().populate({
      path: "userId",
      select: "name email"
    });

    // Populate tripId and inside it populate userId, selecting only relevant fields
    const items = await PackingItem.find().populate({
      path: "tripId",
      select: "tripName destination startDate endDate notes userId",
      populate: {
        path: "userId",
        select: "name email"
      }
    });

    // Simplify response for cleaner output
    const simplifiedTrips = trips.map(trip => ({
      _id: trip._id,
      tripName: trip.tripName,
      destination: trip.destination,
      startDate: trip.startDate,
      endDate: trip.endDate,
      notes: trip.notes,
      user: trip.userId ? {
        _id: trip.userId._id,
        name: trip.userId.name,
        email: trip.userId.email,
      } : null
    }));

    const simplifiedItems = items.map(item => ({
      _id: item._id,
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      isPacked: item.isPacked,
      trip: item.tripId ? {
        _id: item.tripId._id,
        tripName: item.tripId.tripName,
        destination: item.tripId.destination,
        startDate: item.tripId.startDate,
        endDate: item.tripId.endDate,
        notes: item.tripId.notes,
        user: item.tripId.userId ? {
          _id: item.tripId.userId._id,
          name: item.tripId.userId.name,
          email: item.tripId.userId.email,
        } : null
      } : null
    }));

    res.json({ trips: simplifiedTrips, items: simplifiedItems });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
