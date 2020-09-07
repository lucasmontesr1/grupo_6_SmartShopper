const path = require('path');
const {validationResult} = require('express-validator');


const Products = require(path.resolve(__dirname, '../database/models/Product'));
const Cart = require(path.resolve(__dirname, '../database/models/cart'));
const cartItem = require(path.resolve(__dirname, '../database/models/cartItem'));
module.exports = {
    addCart: (req,res) =>{
        const errores = validationResult(req);
        if(errores.isEmpty()){
            //Debemos buscar el producto por el id
            Products.findByPk(req.body.productId,{
                include: ['category']
            })
            .then((products) =>{
                //return res.send( typeof productos.discount)
                let price = products.discount >0 ?
                Number(products.price) * ((100 - products.discount)/100) : Number(productos.price)

                //console.log(price +"==================================")
                //Crear mi items
                return cartItem.create({
                    salePrice : price,
                    quantity : req.body.cantidad,
                    subtotal : req.body.cantidad * price,
                    state: 1,
                    userId: req.session.usuario.id,
                    productId: productos.id,
                    cartId: null
                     
                }) 
                .then(item  => res.redirect('/products'))
                .catch(error => console.log(error)) 
            })
        }else{
            Products.findByPk(req.body.productId,{
                include: ['category']
            })
            .then(products =>{
                res.render(path.resolve(__dirname, '..','views','products','detail'), {products , errores: errores.mapped()});
            })
        }
    },
    cart : (req,res) =>{
        cartItem.findAll({
            where : {
                state: 1,
                userId : req.session.usuario.id
            },
            include: {
                all: true,
                nested: true
            }
        })        
        .then((cartItem)=>{
            let total = items.reduce((total,cartItem)=> (total = total + Number(cartItem.subtotal)),0)

            res.render(path.resolve(__dirname, '..','views','carrito'), {cartProduct :cartItems , total  } );
        })

    },
    deleteCart: (req,res) =>{
        cartItem.destroy({
            where: {
                productId : req.body.itemId,
                userId : req.session.usuario.id
            }
        })
        .then(()=> res.redirect('/carrito'))
        .catch(error => console.log(error))
    },
    shop : (req,res)=>{
        let totalPrecio = 0;
        cartItem.findAll({
            where:{
                userId: req.session.usuario.id,
                state: 1
            }
        })
        .then((cartItems)=>{
            totalPrecio = cartItems.reduce((total,cartItem)=> (total = total + Number(item.subtotal)),0)
        })
        Cart.findOne({
            order: [['createdAt','DESC']]
        })
        .then((cart)=>{
            return Cart.create({
                orderNumber: cart ? cart.orderNumber + 1 : 1,
                total: totalPrecio,
                userId: req.session.usuario.id
            })
        })
        .then(cart =>{
            Item.update({
                state: 0,
                cartId: cart.id
            },{
                where: {
                    userId: req.session.usuario.id,
                    state: 1
                }
            }
            )
        })
        .then(()=> res.redirect('/carrito/historialCompra'))
        .catch(error => console.log(error))
    },
    history : (req,res) =>{
        Cart.findAll({
            where: {
                userId : req.session.usuario.id
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then(carts =>{
            res.render(path.resolve(__dirname, '..','views','carrito','historialCompra'), {carts } );           
        })
    },
    buyDetail : (req,res) =>{
        Cart.findByPk(req.params.id, {
            include : {
                all: true,
                nested: true
            }
        })
        .then((cart) =>{
            res.render(path.resolve(__dirname, '..','views','carrito','detalleCompra'), {cart } );
        })
    }


}