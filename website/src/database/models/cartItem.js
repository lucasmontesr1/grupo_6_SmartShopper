const path = require('path');
const {
    DataTypes
} = require('sequelize');
const db = require(path.resolve(__dirname, '../connection'));

const CartItem = db.define('cartitem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    salePrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    state: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cartId: {
        type: DataTypes.INTEGER,
    },

});
module.exports = CartItem;