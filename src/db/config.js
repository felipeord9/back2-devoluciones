const { config} = require("../config/config")

module.exports = {
  production: {
    url: config.dbSQLServerUrl,
    dialect: 'mssql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  },
  development: {
    url: config.dbSQLServerUrl,
    dialect: 'mssql'
  },
}