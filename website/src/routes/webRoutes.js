const express = require('express');
const router = express.Router();
const path = require('path');
const webController = require(path.resolve(__dirname, '../controllers/webController'))

router.get('/', webController.index);
router.get('/register', webController.register);
router.get('/admin/items', webController.addItem);
router.get('/carrito', webController.carrito);
router.get('/payment', webController.payment);
module.exports = router