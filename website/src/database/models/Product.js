const path = require('path');
const {
    DataTypes
} = require('sequelize');
const db = require(path.resolve(__dirname, '../connection'));

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING(256),
    },
    price: {
        type: DataTypes.DECIMAL(10, 3),
    },
    img: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    }
});

module.exports = Product;