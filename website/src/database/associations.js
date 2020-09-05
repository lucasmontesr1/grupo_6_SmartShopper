const path = require('path');
const ProductModel = require(path.resolve(__dirname, './models/Product'));
const CategoryModel = require(path.resolve(__dirname, './models/Category'));
const Cart = require(path.resolve(__dirname, './models/Cart'));
const CartItem = require(path.resolve(__dirname, './models/CartItem'));
const User = require(path.resolve(__dirname, './models/User'));
module.exports = () => {

    ProductModel.belongsTo(CategoryModel, {
        foreignKey: 'categoryId',
    });

    CategoryModel.hasMany(ProductModel, {
        foreignKey: 'categoryId',

    });
    Cart.hasMany(CartItem, {
        foreignKey: "cartId",
    });
    Cart.belongsTo(User, {
        foreignKey: "id",
    });
    CartItem.belongsTo(Cart, {
        
        foreignKey: "id",
    });

    CartItem.belongsTo(User, {
       
        foreignKey: "id",
    });

    CartItem.belongsTo(ProductModel, {
      
        foreignKey: "id",
    });


    console.log('Associations ran.')
}