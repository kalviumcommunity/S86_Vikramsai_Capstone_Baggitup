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

// POST create packing item with validation
router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.tripId) {
      return res.status(400).json({ message: "Name and tripId are required fields" });
    }

    const item = new PackingItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Failed to create packing item", error: error.message });
  }
});

// PUT update packing item
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await PackingItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedItem) return res.status(404).json({ message: "Packing item not found" });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: "Failed to update packing item", error: error.message });
  }
});

module.exports = router;
