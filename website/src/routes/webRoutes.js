const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const webController = require(path.resolve(__dirname, '../controllers/webController'));
const productController = require(path.resolve(__dirname, '../controllers/productController'));
const usersController = require(path.resolve(__dirname, '../controllers/usersController'));
const storage = require(path.resolve(__dirname, '../services/storageService'));
const usersMiddleware = require(path.resolve(__dirname, '../middlewares/usersMiddleware'))
const adminController = require(path.resolve(__dirname , '..','controllers','adminController'));
const productImgUpload = multer({storage:storage.product})
const userImgUpload = multer({storage:storage.users})

router.get('/', webController.index);

router.get('/admin/items', webController.addItem);
router.get('/payment', webController.payment);
router.post('/procesar-pago', webController.payment)
router.get('/nosotros',webController.nosotros);
router.get('/contact', webController.contact);
router.get('/carrito', webController.carrito);
router.get('/categorias', webController.show);

router.get('/cookies', webController.cookies);
router.get('/privacy', webController.privacy);

router.get('/products/search', productController.search)
router.delete('/products/:id', productController.delete)
router.get('/products', productController.get);
router.get('/products/create', productController.create);
router.post('/products/create', productImgUpload.single('imagen'), productController.create);
router.get('/products/:id', productController.get);
router.get('/products/:id/edit', productController.update);
router.put('/products/:id', productImgUpload.single('imagen'), productController.update);

router.get('/users/register', usersController.get);
router.post('/users/create', userImgUpload.single('imagen'), usersMiddleware.checkUserExist, usersController.create);
router.get('/users/login', usersController.login);
router.post('/users/login',usersMiddleware.checksLogin, usersController.login);
router.get('/users/logout', usersController.logout);

router.get('/administrar', adminController.index);
router.get('/admin/create',  adminController.create);

router.get('/admin/detail/:id', adminController.show);
router.get('/admin/delete/:id', adminController.destroy);
router.get('/admin/edit/:id', adminController.edit);



module.exports = router