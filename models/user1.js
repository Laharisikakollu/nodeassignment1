'use strict';
module.exports = (sequelize, DataTypes) => {
  const User1 = sequelize.define('User1', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phno: DataTypes.STRING,
    rollid: DataTypes.INTEGER,
    deletedUsers:DataTypes.BOOLEAN
  }, {});

  User1.associate = function (models) {
    // associations can be defined here
    User1.belongsTo(models.Role,{foreignKey: 'rollid'});
    //models.Role.hasOne(User1,{foreignKey: 'rollid'});

    User1.belongsTo(models.Project,{foreignKey:'projectId'})
    models.Project.hasMany(User1,{foreignKey:'projectId'})
  };
  return User1;
};