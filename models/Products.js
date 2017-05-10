'use strict'

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
      description: {
      type:DataTypes.STRING,
      allowNull: false
    },
      cost: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
}, {
    classMethods: {
      associate: function(models) {
        Product.hasMany(models.productOrder)
      }
    }
 });
  return Product;
};
