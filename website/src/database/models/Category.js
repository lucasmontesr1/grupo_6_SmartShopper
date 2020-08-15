const path = require('path');
const {
    DataTypes,
} = require('sequelize');
const db = require(path.resolve(__dirname, '../connection'));

const Category = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
    }
},{
    tableName: 'categories',
    timestamps: false,
});

module.exports = Category;
