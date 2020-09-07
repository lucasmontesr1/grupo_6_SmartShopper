const path = require('path');
const mercadopago = require('mercadopago');
const ProductModel = require(path.resolve(__dirname, '../database/models/Product'));
const OrderModel = require(path.resolve(__dirname, '../database/models/Orders'));

const webController = {
    index: function (req, res) {
        ProductModel.findAll().then((products) => {
            res.render(path.resolve(__dirname, '../views/index.ejs'), {
                products
            })
        })
    },
    addItem: function (req, res) {
        res.render(path.resolve(__dirname, '../views/productAdd.ejs'))
    },
    carrito: function (req, res) {
        let orderinstance;
        if (!req.cookies.cart) {
            res.redirect('/');
            return
        }
        if (!req.session.user) {
            res.redirect('/');
            return
        }

        OrderModel.create({
            userId: parseInt(req.session.user.id),
            hasCheckedOut: false,
            status: 'pending',
        }).then(order => {
            orderinstance = order; 
            console.log('Order Saved')
        }).catch(e=>console.log(e));

        var preference = {
            items: [],
        }
        var cart = JSON.parse(req.cookies.cart);
        var ids = [];
        var total = 0
        cart.forEach(e => {
            ids.push(e.id);
        });
        ProductModel.findAll({
            where: {
                id: ids
            }
        }).then((products) => {
            for (var i = 0; i < products.length; i++) {
                let cartIndex = cart.findIndex(e => e.id == products[i].id)
                if (cartIndex != -1) {
                    products[i].quantity = cart[cartIndex].quantity
                    if (products[i].quantity) {
                        total += products[i].price * products[i].quantity
                    }
                }
                let mpItem = {
                    title: products[i].name,
                    unit_price: Number(products[i].price),
                    quantity: Number(products[i].quantity),
                }
                preference.items.push(mpItem)
            }
            mercadopago.configure({
                access_token: 'TEST-3311244539256985-040311-7c4165b250f77b59b98b56735ce690e2-205989559'
            })

            mercadopago.preferences.create(preference).then(function (data) {
                res.render(path.resolve(__dirname, '../views/carrito.ejs'), {
                    products,
                    total,
                    preference: data,
                    order: orderinstance
                })
            }).catch(function (error) {
                console.log(error)
            });
        })
    },
    productDetail: function (req, res) {
        res.render(path.resolve(__dirname, '../views/productDetail.ejs'))
    },
    nosotros: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/partials/nosotros.html'));
        res.render(path.resolve(__dirname, '../views/nosotros'));
    },
    contact: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/partials/contact.html'));
        res.render(path.resolve(__dirname, '../views/contact'), {
            Title: 'Contacto'
        });
    },
    show: (req, res) => {
        res.render(path.resolve(__dirname, '../views/web/categories'), {
            platos
        });
    },
    payment: (req, res) => {
        mercadopago.configure({
            access_token: 'APP_USR-3311244539256985-040311-c7fa49c4c335c2c84ba2029bf405ea73-205989559'
        })

        let preference = {
            items: [{
                title: 'F in chat bois',
                unit_price: 420,
                quantity: 69
            }],
            back_urls: {
                success: 'localhost:3001/payment?id=1',
                pending: 'localhost:3001/payment?id=1',
                failure: 'localhost:3001/payment?id=1',
            }
        }

        mercadopago.preferences.create(preference).then(function (data) {
            console.log(data);
            res.render(path.resolve(__dirname, '../views/payments.ejs'), {
                pref: data
            });
        }).catch(function (error) {
            res.render('500', {
                error: error
            })
        });
    }
}

module.exports = webController;