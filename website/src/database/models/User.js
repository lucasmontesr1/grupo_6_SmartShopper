const path = require('path');
const {
    DataTypes
} = require('sequelize');
const db = require(path.resolve(__dirname, '../connection'));

const User = db.define('user', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: {
                type: DataTypes.STRING,
            },
            surname: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING(100),
            },
            password: {
                type: DataTypes.STRING(156),
                allowNull: false,
            },
            img: {
                type: DataTypes.STRING
            },
            document: {
                type: DataTypes.STRING
            },
            admin: {
                type: DataTypes.BOOLEAN
            },
        });

module.exports = User;
