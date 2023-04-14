'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productID: {
        type: Sequelize.STRING
      },
      productName: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      customerName: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Status',
          key: 'id'
        }
      },
      transactionDate: {
        type: Sequelize.DATE
      },
      createBy: {
        type: Sequelize.STRING
      },
      createOn: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};