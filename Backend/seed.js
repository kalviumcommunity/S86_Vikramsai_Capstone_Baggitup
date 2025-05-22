const mongoose = require('mongoose');
const User = require('./models/User');
const Trip = require('./models/Trip');
const PackingItem = require('./models/PackingItem');

async function seedData() {
  try {
    // Connect to MongoDB (adjust your connection string)
    await mongoose.connect(process.env.DB_URL);

    const user = await User.create({
      name: "Vikramsai",
      email: "vikram@example.com",
      password: "securepassword"
    });

    const trip = await Trip.create({
      tripName: "Goa Trip",  // or change to 'name' depending on schema
      destination: "Goa",
      startDate: new Date("2025-06-01"),
      endDate: new Date("2025-06-10"),
      notes: "Fun trip!",
      userId: user._id
    });

    const item = await PackingItem.create({
      name: "Sunscreen",
      category: "Toiletries",
      quantity: 2,
      tripId: trip._id
    });

    console.log("Seeded user, trip, and item with relationships.");

  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await mongoose.disconnect();
  }
}

seedData();
