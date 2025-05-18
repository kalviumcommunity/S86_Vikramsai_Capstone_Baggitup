const Sequelize = require("sequelize");

// Set your actual database credentials here or use environment variables
const sequelize = new Sequelize("baggitup_db", "root", "your_password", {
  host: "localhost",
  dialect: "mysql"
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require("./User")(sequelize, Sequelize.DataTypes);
db.Trip = require("./Trip")(sequelize, Sequelize.DataTypes);
db.PackingItem = require("./PackingItem")(sequelize, Sequelize.DataTypes);

// Setup relationships if any model has associate() method
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
