const path = require('path');
const fs = require('fs');
const mercadopago = require('mercadopago');



const webController = {
    index: function(req, res){
        console.log(res.locals);
        console.log(req.session);
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/index.ejs'),{products:products})
    },
    addItem:function(req,res){
        res.render(path.resolve(__dirname, '../views/productAdd.ejs'))
    },
    carrito: function (req, res) {
        res.render(path.resolve(__dirname, '../views/carrito.ejs'))
    },
    productDetail:function(req,res){
        res.render(path.resolve(__dirname, '../views/productDetail.ejs'))
    },
    nosotros: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/partials/nosotros.html'));
        res.render(path.resolve(__dirname, '../views/nosotros'), { Title: 'Nosotros' });
    },
    contact: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/partials/contact.html'));
        res.render(path.resolve(__dirname, '../views/contact'),{ Title: 'Contacto' });
    },
    show: (req, res) => {
        res.render(path.resolve(__dirname, '../views/web/categories'), {platos});
    },
    payment: (req, res) => {
        mercadopago.configure({
            access_token: 'TEST-3311244539256985-040311-7c4165b250f77b59b98b56735ce690e2-205989559'
        })

        let preference = {
            items:[
                {
                    title:'F in chat bois',
                    unit_price:420,
                    quantity:69
                }
            ],
            back_urls: {
                    success: 'localhost:3001/payment?id=1',
                    pending: 'localhost:3001/payment?id=1',
                    failure: 'localhost:3001/payment?id=1',
                }
        }

        mercadopago.preferences.create(preference).then(function(data){
            console.log(data);
            res.render(path.resolve(__dirname, '../views/payments.ejs'), {
                pref: data
            });
        }).catch(function (error){
            res.render('500', {error:error})
        });
    }
}

module.exports = webController;