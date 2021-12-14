
const { Sequelize } = require('sequelize');

module.exports = new Sequelize('wattage', 'smarthomesdashboarduser@smarthomes', 'b5zT;q_fS\\aAUtpD', {
    host: 'smarthomes.postgres.database.azure.com',
    dialect: 'postgres',
  
   "ssl":true,
   "dialectOptions":{
      "ssl":{
         "require":true
      }
    }
  });