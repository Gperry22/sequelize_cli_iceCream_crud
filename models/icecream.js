module.exports = function (sequelize, DataTypes) {
  var IceCream = sequelize.define("IceCream", {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return IceCream;
};
