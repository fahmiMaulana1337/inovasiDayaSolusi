'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Status, {foreignKey: 'status'})
    }
  }
  Product.init({
    productID: DataTypes.STRING,
    productName: DataTypes.STRING,
    amount: DataTypes.STRING,
    customerName: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    transactionDate: DataTypes.DATE,
    createBy: DataTypes.STRING,
    createOn: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false,
  });
  return Product;
};