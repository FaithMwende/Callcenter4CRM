const { DataTypes } = require('sequelize');
const sequelize = require('../lib/database');

const Call_Log = sequelize.define('calls_logs', {
  amount: {
    type: DataTypes.STRING,
    allowNull: true
  },
  destinationNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sessionId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  durationInSeconds: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  callerNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  callStartTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  callSessionState: {
    type: DataTypes.STRING,
    allowNull: true
  },
  callerCarrierName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  direction: {
    type: DataTypes.STRING,
    allowNull: true
  },
  callerCountryCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isActive: {
    type: DataTypes.STRING,
    allowNull: true
  },
  currencyCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

module.exports = Call_Log;
