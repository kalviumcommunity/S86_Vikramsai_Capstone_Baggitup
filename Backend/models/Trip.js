const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripName: { type: String, required: true },
  destination: String,
  startDate: Date,
  endDate: Date,
  notes: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Trip", tripSchema);
