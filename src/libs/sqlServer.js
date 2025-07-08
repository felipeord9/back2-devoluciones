const { Sequelize } = require('sequelize')

const { config } = require('../config/config')
const setupModels = require('../db/models')

const options = {
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
}

const sqlServer = new Sequelize(config.dbSQLServerUrl, options)

setupModels(sqlServer)

module.exports = sqlServer