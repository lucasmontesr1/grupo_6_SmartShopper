const express = require('express');
const router = express.Router();
const path = require('path');
const webController = require(path.resolve(__dirname, '../controllers/webController'))

router.get('/', webController.index);
router.get('/register', webController.register);
router.get('/admin/items', webController.addItem);
router.get('/product/detail', webController.productDetail); //acá habria que usa una path variable para acceder dinamicamente

module.exports = router