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
        body('email').custom((value) => {
            return getUserbyEmail(value).then((user) => {
                return user.email == value
            }).catch((err) => {
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
            return getUserbyEmail(req.body.email).then(user => {
                return bcrypt.compareSync(value, user.password)
            })
        }).withMessage('Incorrect password')
    ]
}

const getUserbyEmail = email => {
    return UserModel.findOne({
        where: {
            email: email
        }
    }).then(response => {
        return response.dataValues
    })

}

module.exports = middleware