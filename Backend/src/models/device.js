'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.belongsTo(models.Garden)
      Device.hasMany(models.Lighting)
      Device.hasMany(models.OperationLog)
      Device.hasMany(models.Schedule)
    }
  }
  Device.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    currentState: DataTypes.BOOLEAN,
    isAppliedThreshold: DataTypes.BOOLEAN,
    isAppliedSchedule: DataTypes.BOOLEAN,
    gardenId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};