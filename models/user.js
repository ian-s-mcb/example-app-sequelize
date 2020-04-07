'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(32),
      validate: { isEmail: true }
    },
    firstName: {
      type: DataTypes.STRING(32),
      validate: { isNull: false }
    },
    lastName: {
      type: DataTypes.STRING(32),
      validate: { isNull: false }
    },
    password: {
      type: DataTypes.STRING(),
      validate: { isNull: false, len: [8, 64] }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
