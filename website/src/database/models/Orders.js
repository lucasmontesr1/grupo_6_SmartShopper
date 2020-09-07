const path = require('path');
const {
    DataTypes
} = require('sequelize');
const db = require(path.resolve(__dirname, '../connection'));

const Order = db.define('order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
    } ,
    amount: {
        type: DataTypes.INTEGER,
    },
    payment: {
        type: DataTypes.INTEGER,
    },
    hasCheckedOut: {
        type: DataTypes.BOOLEAN,
    },
    status: {
        type: DataTypes.STRING,
    },
});

module.exports = Order;