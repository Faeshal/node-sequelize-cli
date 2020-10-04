"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  Country.init(
    {
      countryName: DataTypes.STRING,
      capital: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  Country.associate = function (models) {
    Country.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Country;
};
