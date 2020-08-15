const path = require('path');
const {
    body
} = require('express-validator');
const bcrypt = require('bcryptjs');
const UserModel = require(path.resolve(__dirname, '../database/models/User'));
const {
    Op
} = require("sequelize");


const middleware = {
    checkUserExist: (req, res, next) => {
        UserModel.findAll({
            where: {
                [Op.or]: [{
                        document: req.body.document
                    },
                    {
                        email: req.body.email
                    }
                ]
            }
        }).then((users) => {
            if (users.length > 0) {
                console.log('User already exist')
                return
            }
        }).catch(err => console.log(err))
        console.log('New user')
        next()
    },
    checkPassword: (req, res) => {},
    checksLogin: [
        body('email').custom((value) => {
            UserModel.findAll({where: {email:value}}).then((users)=>{
                return users.length>0
            }).catch((err)=>{
                console.log(err);
                return false
            })
        }).withMessage('Cannot recognize email'),
        body('password').isLength({
            min: 8
        }).withMessage('The password is too short'),
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').custom((value, {
            req
        }) => {
            UserModel.findAll({where: {email: req.body.email}}).then((users) => {
                user = users[0];
                return bcrypt.compareSync(value, user.password)
            }).catch((err)=>{
                console.log(err);
                return false
            })
        }).withMessage('Incorrect password')
    ]
}

module.exports = middleware