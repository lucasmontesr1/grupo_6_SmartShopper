const path = require('path');
const {
    DataTypes
} = require('sequelize');
const db = require(path.resolve(__dirname, '../connection'));

const Cart = db.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    orderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Cart;
