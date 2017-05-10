'use strict'

module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
    type:DataTypes.STRING,
    allowNull: false,
  }
}, {
  classMethods: {
      associate: function(models) {
        Customer.hasMany(models.Order)
      }
    }
 });
  return Customer;
};
