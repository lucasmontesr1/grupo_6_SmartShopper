const path = require('path');
const webController = {
    index: function(req, res){
        res.render(path.resolve(__dirname, '../views/index.ejs'))
    },
    register:function(req, res){
        res.render(path.resolve(__dirname, '../views/register.ejs'))
    },
    addItem:function(req,res){
        res.render(path.resolve(__dirname, '../views/productAdd.ejs'))
    },
    carrito:function(req, res){
        res.render(path.resolve(__dirname, '../views/carrito.ejs'))

    },
    detail:function(req,res){
        res.render(path.resolve(__dirname, '../views/productDetail.ejs'))
    }
       
}

module.exports = webController;