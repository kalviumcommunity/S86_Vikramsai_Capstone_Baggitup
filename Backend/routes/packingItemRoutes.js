const express = require("express");
const router = express.Router();
const PackingItem = require("../models/PackingItem");

// GET all packing items
router.get("/", async (req, res) => {
  const items = await PackingItem.find().populate("tripId");
  res.json(items);
});

module.exports = router;
