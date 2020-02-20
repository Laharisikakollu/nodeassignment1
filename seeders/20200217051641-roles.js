'use strict';
const models = require('../models/index');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return models.Role.bulkCreate([
    {
      name: 'admin'
    },
    {
      name: 'softwareDeveloper'
    },
    {
      name: 'intern'
    },
    {
      name: 'qualityAdministrator'
    },
    {
      name: 'designAnalyser'
    }
  ], {
    id: {
      autoIncrement: true
    }
  })
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Roles')
  }
};
