'use strict'

module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define('Order', {},{
    classMethods: {
      associate: function(models) {
        Order.belongsTo(models.Customer)
        Order.hasMany(models.productOrder)
      }
    }
  });
  return Order;
};
