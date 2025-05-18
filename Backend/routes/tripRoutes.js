const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// GET all trips
router.get("/", async (req, res) => {
  const trips = await Trip.find().populate("userId");
  res.json(trips);
});

module.exports = router;
