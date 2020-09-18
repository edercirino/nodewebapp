  //DB Connection
  const Sequelize = require('sequelize')
  const sequelize = new Sequelize('dbname', 'root', 'dbpassword', {
    host: "localhost",
    dialect: "mysql"
  })

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }