const express = require('express');
const router = express.Router();
const path = require('path');
const webController = require(path.resolve(__dirname, '../controllers/webController'))
const productController = require(path.resolve(__dirname, '../controllers/productController'))
router.get('/', webController.index);
router.get('/register', webController.register);
router.get('/admin/items', webController.addItem);
router.get('/product/detail', webController.productDetail); //acá habria que usa una path variable para acceder dinamicamente
router.get('/carrito', webController.carrito);
router.get('/products', productController.get);
module.exports = router