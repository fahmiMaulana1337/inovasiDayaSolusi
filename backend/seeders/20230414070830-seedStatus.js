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
   

    let status =[];

    for (const key in data) {
      if(key==='status'){
          data[key].map(el=>{
            status.push(el)
          })
      }
  }
    status.map(el=>{
      return {
          id: el.id,
          name: el.name                
      }
    })
    await queryInterface.bulkInsert('Status', status, {});

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Status', null, {});
  }
};
