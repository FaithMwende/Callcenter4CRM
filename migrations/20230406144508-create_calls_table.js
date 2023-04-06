'use strict';
//
///** @type {import('sequelize-cli').Migration} */
//module.exports = {
//  async up (queryInterface, Sequelize) {
//    /**
//     * Add altering commands here.
//     *
//     * Example:
//     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//     */
//  },
//
//  async down (queryInterface, Sequelize) {
//    /**
//     * Add reverting commands here.
//     *
//     * Example:
//     * await queryInterface.dropTable('users');
//     */
//  }
//};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('calls_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.STRING
      },
      destinationNumber: {
        type: Sequelize.STRING
      },
      sessionId: {
        type: Sequelize.STRING
      },
      durationInSeconds: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      callerNumber: {
        type: Sequelize.STRING
      },
      callStartTime: {
        type: Sequelize.DATE
      },
      callSessionState: {
        type: Sequelize.STRING
      },
      callerCarrierName: {
        type: Sequelize.STRING
      },
      direction: {
        type: Sequelize.STRING
      },
      callerCountryCode: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.STRING
      },
      currencyCode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('calls_logs');
  }
};
