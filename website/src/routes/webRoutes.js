const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const webController = require(path.resolve(__dirname, '../controllers/webController'));
const productController = require(path.resolve(__dirname, '../controllers/productController'));
const storage = require(path.resolve(__dirname, '../services/storageService'))

const upload = multer({storage})

router.get('/', webController.index);

router.get('/admin/items', webController.addItem);
router.get('/payment', webController.payment);
router.get('/nosotros', webController.nosotros);
router.get('/contact', webController.contact);
router.get('/register', webController.register);
router.get('/carrito', webController.carrito);
router.get('/categorias', webController.show);

router.delete('/products/:id', productController.delete)
router.get('/products', productController.get);
router.get('/products/create', productController.create);
router.post('/products/create', upload.single('imagen'), productController.create);
router.get('/products/:id', productController.get);
router.get('/products/:id/edit', productController.update)
router.put('/products/:id', upload.single('imagen'), productController.update)



module.exports = router