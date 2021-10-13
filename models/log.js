'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    static associate(models) {
      // define association here
    }
  };
  Log.init({
    date: DataTypes.DATE,
    endpoint: DataTypes.STRING,
    parameters: DataTypes.TEXT
  }, {
    sequelize,
    tableName: 'logs',
    modelName: 'Logs',
  });
  return Log;
};