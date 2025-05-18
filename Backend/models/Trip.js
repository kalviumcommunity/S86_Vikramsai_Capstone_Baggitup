module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define("Trip", {
    tripName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    notes: DataTypes.TEXT
  });

  Trip.associate = (models) => {
    Trip.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Trip.hasMany(models.PackingItem, {
      foreignKey: "tripId",
      onDelete: "CASCADE"
    });
  };

  return Trip;
};
