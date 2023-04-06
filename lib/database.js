
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mobifarm', 'mobifarm', 'mobifarm', {
  host: '172.104.253.95',
  dialect: 'mysql',
});
sequelize.sync();
module.exports = sequelize;
