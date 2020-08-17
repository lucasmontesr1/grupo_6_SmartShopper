const path = require('path');
const ProductModel = require(path.resolve(__dirname, './models/Product'));
const CategoryModel = require(path.resolve(__dirname, './models/Category'));
module.exports = () => {

    ProductModel.belongsTo(CategoryModel, {
        foreignKey: 'categoryId',
    })

    CategoryModel.hasMany(ProductModel, {
        foreignKey: 'categoryId',

    })

    console.log('Associations ran.')
}