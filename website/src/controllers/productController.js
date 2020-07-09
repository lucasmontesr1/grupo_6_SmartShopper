const path = require('path');
const fs = require('fs');
const arrayIndexRemover = require(path.resolve(__dirname,'../services/arrayService'))

const productController = {
    get:(req, res) => {
       let productJsonArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
       let result;
        if (req.params.id != null){
            result = productJsonArray.filter(product => product.id == req.params.id);
            res.render(path.resolve(__dirname, '../views/productDetail.ejs'), 
            {
                product:
                {
                    item:result[0],
                    productList: productJsonArray
                }
            })
            return
        }else{
            result = productJsonArray;
        }
        res.render(path.resolve(__dirname, '../views/productList.ejs'), {products:result})
        return
    },
    create:(req, res, next) => {
        let jsonArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let categories = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categories.json')))
        switch (req.method){
            case 'GET':
                res.render(path.resolve(__dirname, '../views/productCreate.ejs'), {categories:categories})
                return
            case 'POST':
                let formItems = req.body
                let newItem = {
                    id: Math.round(jsonArray.length + 1 * Date.now()),
                    nombre:formItems.nombre,
                    descripcion:formItems.description,
                    categoria:formItems.categoria,
                    imagen:req.file.filename,
                    colores:'placeholder',
                    precio:formItems.precio
                }
                jsonArray.push(newItem)
                fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),JSON.stringify(jsonArray));
                res.redirect(`/products/${newItem.id}`)
        }
    },
    update:(req, res) => {
        let productJsonArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        switch (req.method) {
            case 'GET':
                let categories = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categories.json')))
                let result;
                if (req.params.id != null) {
                    result = productJsonArray.filter(product => product.id == req.params.id);
                    res.render(path.resolve(__dirname, '../views/productEdit.ejs'), {
                        product: {
                            item: result[0],
                            productList: productJsonArray,
                            categories: categories
                        }
                    })
                }
                return
            case 'PUT':
                let formItems = req.body;
                let id = formItems.id;
                let modIndex = productJsonArray.findIndex((element) => element.id == id);
                let tempSpecs = productJsonArray[modIndex].specs; //todavia no tengo decidido como lo voy a manejar en el front
                let deleteFile = productJsonArray[modIndex].imagen;
                productJsonArray[modIndex] = {
                    id: id,
                    nombre: formItems.nombre,
                    descripcion: formItems.description,
                    categoria: formItems.categoria,
                    specs: tempSpecs,
                    imagen: req.file.filename,
                    colores: 'placeholder',
                    precio: formItems.precio
                }
                fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(productJsonArray));
                res.redirect(`/products/${id}`);
                fs.unlinkSync(path.resolve(__dirname, '../../public/img', deleteFile));
        }
        
    },
    delete:(req, res) => {
        let productJsonArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let resultArray = arrayIndexRemover(productJsonArray, req.params.id)
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(resultArray));
        res.redirect('/')
        return
    },

}
module.exports = productController;