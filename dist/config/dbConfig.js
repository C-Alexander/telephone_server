const config = require('./config.json');
const Sequelize = require('sequelize');
const sequel = new Sequelize(config.database, config.username, config.password, config);
sequel.authenticate();
module.exports.getDb = sequel;
//# sourceMappingURL=dbConfig.js.map