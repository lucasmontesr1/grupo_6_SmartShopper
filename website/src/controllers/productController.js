const path = require('path');
const fs = require('fs');

const productController = {
    get:(req, res) => {
        console.log('test test test')
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
            console.log(result[0])
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
                    id: jsonArray.length + 1,
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
        productJsonArray.splice(req.param.id,1);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(productJsonArray));
        res.redirect('/')
        console.log('delete')
        return
    },

}
module.exports = productController;