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
   return models.Project.bulkCreate([
    {
      projectName: 'Chatbot'
    },
    {
      projectName: 'Facerecognition'
    },
    {
      projectName: 'Iot'
    },
    {
      projectName: 'University related query'
    },
    {
      projectName:'ML'
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
   return queryInterface.bulkDelete('Project')
  }
};
