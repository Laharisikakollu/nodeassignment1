'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectName: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    
  };
  return Project;
};