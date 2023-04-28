
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ivr_phone', 'ivr_phone', 'ivr_phone', {
  host: '170.187.190.99',
  dialect: 'mysql',
});
sequelize.sync();
module.exports = sequelize;
