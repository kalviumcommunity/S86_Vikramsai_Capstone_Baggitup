const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.email) return res.status(400).json({ message: "Email is required" });

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(409).json({ message: "User with this email already exists" });

    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Failed to create user", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (req.body.email) {
      const existingUser = await User.findOne({ email: req.body.email, _id: { $ne: req.params.id } });
      if (existingUser) return res.status(409).json({ message: "User with this email already exists" });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Failed to update user", error: error.message });
  }
});

module.exports = router;
