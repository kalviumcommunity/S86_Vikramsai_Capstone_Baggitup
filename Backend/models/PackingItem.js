module.exports = (sequelize, DataTypes) => {
  const PackingItem = sequelize.define("PackingItem", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: DataTypes.STRING,
    isPacked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  });

  PackingItem.associate = (models) => {
    PackingItem.belongsTo(models.Trip, {
      foreignKey: "tripId"
    });
  };

  return PackingItem;
};
