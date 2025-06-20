const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find().populate("userId");
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trips", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.tripName || !req.body.userId) {
      return res.status(400).json({ message: "tripName and userId are required" });
    }

    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: "Failed to create trip", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedTrip) return res.status(404).json({ message: "Trip not found" });
    res.json(updatedTrip);
  } catch (error) {
    res.status(400).json({ message: "Failed to update trip", error: error.message });
  }
});

module.exports = router;
