'use strict';
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/viewData.json', 'utf8'));
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let product =[];

    for (const key in data) {
      if(key==='data'){
          data[key].map(el=>{
            product.push(el)
          })
      }
  }
    product.map(el=>{
      return {
          id: el.id,
          productID: el.productID,
          productName: el.productName,
          amount: el.amount,
          customerName: el.customerName,
          status: el.status,
          transactionDate: el.transactionDate,
          createBy: el.createBy,
          createOn: el.createOn,                
      }
    })
    await queryInterface.bulkInsert('Products', product, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
