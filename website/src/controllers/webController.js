const path = require('path');
const fs = require('fs');



const webController = {
    index: function(req, res){
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/index.ejs'),{products:products})
    },
    register:function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
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
    }
}

module.exports = webController;