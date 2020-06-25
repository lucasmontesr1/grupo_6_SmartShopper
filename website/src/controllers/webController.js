const path = require('path');
const webController = {
    index: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/index.html'))
    },
    register:function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    },
    addItem:function(req,res){
        res.send(path.resolve(__dirname, '../views/productAdd.html'))
    }
}

module.exports = webController;