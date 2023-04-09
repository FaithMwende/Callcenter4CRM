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
      clientDialedNumber: {
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

//
//
//{
//  "callSessionState": "Ringing",
//  "direction": "Inbound",
//  "callerCountryCode": "-1",
//  "callerNumber": "Callcenter4CRM.sdsad",
//  "destinationNumber": "+254730731025",
//  "callerCarrierName": "None",
//  "sessionId": "ATVId_12e9ae0dc535b9ce1374eac20d7cf990",
//  "callStartTime": "2023-04-06 19:20:46",
//  "isActive": "1",
//  "clientDialedNumber": "0726339982"
//}
//
//
//{
//  "callSessionState": "Completed",
//  "direction": "Inbound",
//  "callerCountryCode": "-1",
//  "durationInSeconds": "0",
//  "amount": "0.000",
//  "callerNumber": "Callcenter4CRM.sdsad",
//  "destinationNumber": "+254730731025",
//  "callerCarrierName": "None",
//  "status": "Success",
//  "sessionId": "ATVId_12e9ae0dc535b9ce1374eac20d7cf990",
//  "callStartTime": "2023-04-06 19:20:46",
//  "isActive": "0",
//  "currencyCode": "KES",
//  "clientDialedNumber": "0726339982"
//}


