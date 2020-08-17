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
        return UserModel.findAll({
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
                console.log('User already exists')
                return res.redirect('/users/login')
            } else {
                return next();
            }
        }).catch(err => {
            console.log(err);
            return res.redirect('/')
        })
    },
    checksLogin: [
        body('email').custom(async function (value){
            let user = await getUserbyEmail(value);
            if (user == null) {
                return Promise.reject('Invalid Email')
            }
            return user.email == value ? true : Promise.reject('Cannot recognize email')
        }),
        body('password').isLength({
            min: 8
        }).withMessage('The password is too short'),
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').custom(async function (value, {
            req
        }) {
            let user = await UserModel.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (user == null){
                return Promise.reject('Invalid password')
            }
            return bcrypt.compareSync(value, user.password) ? true : Promise.reject('Incorrect password')
        })
    ]
}

const getUserbyEmail = async function (email)  {
    return await UserModel.findOne({
        where: {
            email: email
        }
    }).then(response => {
        return response
    })
}
module.exports = middleware