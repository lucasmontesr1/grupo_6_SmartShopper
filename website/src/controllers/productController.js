const path = require('path');
const fs = require('fs');

const productController = {
    get:(req, res) => {
       let productArray = fs.readFileSync(path.resolve(__dirname, '../database/products.json'));
       let productJsonArray = JSON.parse(productArray);
       let result;
        if (req.params.id != null){
            result = productJsonArray.filter(product => product.id == req.params.id);
        }else{
            result = productJsonArray;
        }
        console.log(result);
        res.render(path.resolve(__dirname, '../views/products'), {products:result})
    },
    create:(req, res) => {
        return
    },
    update:(req, res) => {
        return
    },
    delete:(req, res) => {
        return
    },

}