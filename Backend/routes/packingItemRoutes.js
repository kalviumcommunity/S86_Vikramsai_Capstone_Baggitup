const express = require("express");
const router = express.Router();
const PackingItem = require("../models/PackingItem");

// GET all packing items
router.get("/", async (req, res) => {
  try {
    const items = await PackingItem.find().populate("tripId");
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch packing items", error: error.message });
  }
});

// POST new packing item
router.post("/", async (req, res) => {
  try {
    const item = new PackingItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Failed to create packing item", error: error.message });
  }
});

module.exports = router;
