const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const webController = require(path.resolve(__dirname, '../controllers/webController'));
const productController = require(path.resolve(__dirname, '../controllers/productController'));
const usersController = require(path.resolve(__dirname, '../controllers/usersController'));
const storage = require(path.resolve(__dirname, '../services/storageService'));
const usersMiddleware = require(path.resolve(__dirname, '../middlewares/usersMiddleware'))

const productImgUpload = multer({storage:storage.product})
const userImgUpload = multer({storage:storage.users})

router.get('/', webController.index);

router.get('/admin/items', webController.addItem);
router.get('/payment', webController.payment);
router.post('/procesar-pago', webController.payment)
router.get('/nosotros', webController.nosotros);
router.get('/contact', webController.contact);
router.get('/carrito', webController.carrito);
router.get('/categorias', webController.show);

router.delete('/products/:id', productController.delete)
router.get('/products', productController.get);
router.get('/products/create', productController.create);
router.post('/products/create', productImgUpload.single('imagen'), productController.create);
router.get('/products/:id', productController.get);
router.get('/products/:id/edit', productController.update)
router.put('/products/:id', productImgUpload.single('imagen'), productController.update)

router.get('/users/register', usersController.get);
router.post('/users/create', userImgUpload.single('imagen'), usersMiddleware.checkUserExist, usersController.create);

module.exports = router