const {
    Sequelize
} = require('sequelize');

module.exports = new Sequelize('smartshopper_db', 'root', null, {
            "host": "127.0.0.1",
            "dialect": "mysql",
            "port": 3306
        });
    