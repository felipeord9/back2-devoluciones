'use strict';
const { ORDER_TABLE, OrderSchema, Order} = require('../models/orderModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(ORDER_TABLE, 'purchase_order', OrderSchema.purchaseOrder)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(ORDER_TABLE, 'purchaseOrder')
  }
};
