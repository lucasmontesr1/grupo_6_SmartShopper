const path = require('path');
const fs = require('fs');
const ProductModel = require(path.resolve(__dirname, '../database/models/Product'));
const CategoryModel = require(path.resolve(__dirname, '../database/models/Category'));


const productController = {
    get: (req, res) => {
        if (req.params.id != null) {
            let product = ProductModel.findOne({
                where: {
                    id: req.params.id
                }
            });
            let allProducts = ProductModel.findAll();
            Promise.all([product, allProducts]).then(([product, allProducts]) => {
                res.render(path.resolve(__dirname, '../views/productDetail.ejs'), {
                    product,
                    allProducts
                })
            })
            return
        } else {
            res.redirect('/')
        }

        return
    },
    create: (req, res, next) => {
        var catArray = CategoryModel.findAll()
        //let categories = jsonDbService.getFile('categories');
        switch (req.method) {
            case 'GET':
                catArray.then((categories) => {
                    res.render(path.resolve(__dirname, '../views/productCreate.ejs'), {
                        categories
                    })
                })

                return
            case 'POST':
                let formItems = req.body
                ProductModel.create({
                    name: formItems.nombre,
                    description: formItems.description,
                    price: formItems.precio,
                    img: req.file ? req.file.filename : "",
                    colores: 'placeholder',
                    categoryId: formItems.categoria
                }).then((product) => {
                    res.redirect(`/products/${product.id}`)
                })
                break;
        }
    },
    update: (req, res) => {
        let product = ProductModel.findByPk(req.params.id)
        switch (req.method) {
            case 'GET':
                let allProducts = ProductModel.findAll();
                let categories = CategoryModel.findAll();
                if (req.params.id != null) {
                    Promise.all([categories, product, allProducts]).then(([categories, product, allProducts]) => {
                        res.render(path.resolve(__dirname, '../views/productEdit.ejs'), {
                            product,
                            allProducts,
                            categories
                        })
                    })
                }
                return
            case 'PUT':
                let formItems = req.body;
                let id = formItems.id;
                product.then((product) => {
                    let deleteFile = product.img;
                    ProductModel.update({
                        name: formItems.nombre ? formItems.nombre : product.name,
                        description: formItems.description ? formItems.description : product.description,
                        price: formItems.precio ? formItems.precio : product.price,
                        img: req.file ? req.file.filename : product.img,
                        //color mising logic
                    }, {
                        where: {
                            id: id
                        }
                    }).then(() => {
                        res.redirect(`/products/${id}`);
                    })
                    fs.unlinkSync(path.resolve(__dirname, '../../public/img', deleteFile));
                })
                break;
        }
    },
    delete: (req, res) => {
        ProductModel.destroy({where:{id:req.params.id}}).then(()=>{
            res.redirect('/')
            return
        }).catch(err=>console.log(err))
     return
    },
    search: (req, res) => {
        console.log(req.query);
        ProductModel.findAll({
                where: req.query
            }).then((results) => {
            res.render(path.resolve(__dirname, '../views/productFilter.ejs'), {
                results
            });
        });
        
    }
}
module.exports = productController;