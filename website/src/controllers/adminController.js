const path = require('path');
const fs = require('fs');
const { response } = require('express');

module.exports = {
    index : (req,res) =>{
        let products  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname , '..','views','admin','index') , {products});
    },
    create: (req,res) =>{
        let products  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '..','views','admin','create'));
    },
    save: (req,res) =>{
        //res.send(req.body);
        let products  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        //----------------------------------------
        //Solución a la prblemática de el id duplicado. (De acuerdo a la Indicado por Papacho y Ronaldo).
        let totalProducts  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        
        //-----------------------------------------
        //Solución de lo mismo - propuesto por Edu.
        //-----------------------------
        //let ultimo = platos[platos.length-1];
        //-----------------------------
        let newProduct = {
            id : product.id +1,
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            //imagen: req.file.filename
            //Controlar si el usuario subio o no una imagen
            imagen: req.file ? req.file.filename : ""     //If Ternario 
        }
        
        //res.send(nuevoPlato);
        products.push(newProducts);
        productsJSON = JSON.stringify(products,null,2);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),productsJSON);
        res.redirect('/administrar');
    },
    show: (req,res) => {
        //res.send(req.params.id);
        let products  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let productsId = req.params.id;
        
        res.render(path.resolve(__dirname, '..','views','admin','detail'), {products});
    },
    destroy: (req,res) => {
        let products  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        const productsId = req.params.id;
        
        productsJSON = JSON.stringify(products,null,2);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),productsJSON);
        res.redirect('/administrar');
    },
    edit: (req,res) => {
        let products  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let productsId = req.params.id;
        
        res.render(path.resolve(__dirname, '..','views','admin','edit'), {products});
    },
    update: (req,res) =>{
        console.log(req.file);
        let products  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen; 
        let productsUpdate = products.map(products =>{    //id nombre descripcion precio imagen
            if(products.id == req.body.id){
                return products = req.body;
            }
            return products;
        });
        productsJSON = JSON.stringify(productsUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),productsJSON);
        res.redirect('/administrar');       


    }


}
