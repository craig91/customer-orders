'use strict'

module.exports = function(sequelize, DataTypes) {
  const productOrder = sequelize.define('productOrder', {},{
    classMethods: {
      associate: function(models) {
        productOrder.belongsTo(models.Product)
        productOrder.belongsTo(models.Order)
      }
    },
 });
  return productOrder;
};
