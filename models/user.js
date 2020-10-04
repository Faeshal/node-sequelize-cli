"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Country);
  };
  return User;
};
