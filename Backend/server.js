const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const UserRoutes = require("./routes/userRoutes");
const TripRoutes = require("./routes/tripRoutes");
const PackingItemRoutes = require("./routes/packingItemRoutes");

dotenv.config(); 

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Mongodb is connected");
})
.catch(() => {
    console.log("Failed to connect mongodb");
});

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", UserRoutes);
app.use("/api/trips", TripRoutes);
app.use("/api/packing-items", PackingItemRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
