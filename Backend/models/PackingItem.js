const mongoose = require("mongoose");

const packingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  isPacked: { type: Boolean, default: false },
  quantity: { type: Number, default: 1 },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: "Trip" }
});

module.exports = mongoose.model("PackingItem", packingItemSchema);
