const path = require('path');
const jsonDbService = require(path.resolve(__dirname, '../services/jsonDbService'));
const {
    body
} = require('express-validator');
const bcrypt = require('bcryptjs');

const middleware = {
    checkUserExist:(req, res, next) => {
        let userJsonArray = jsonDbService.getFile('users');
        if (checkEmailandDoc(userJsonArray, req.body)) {
            console.log('User already exist')
            return
        }
        console.log('New user')
        next()
    },
    checkPassword:(req, res) => {
    },
    checksLogin:[
         body('email').custom((value) => {
            let userJsonArray = jsonDbService.getFile('users');
            let userIndex = userJsonArray.findIndex((user) => {
                return user.email == value});
            return !(userIndex == -1)
        }).withMessage('Cannot recognize email'),
        body('password').isLength({min:8}).withMessage('The password is too short'),
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').custom((value,{ req }) => {
            let userJsonArray = jsonDbService.getFile('users');
            let user = userJsonArray.find((user) => {
                return user.email == req.body.email
            });
            return bcrypt.compareSync(value, user.password)
        }).withMessage('Incorrect password')
    ]
}
 
function checkEmailandDoc(userJsonArray, reqUser) {
    console.log(reqUser)
    let check = userJsonArray.findIndex((user) => {
        console.log(user)
        return user.doc == reqUser.document || user.email == reqUser.email
    });
    console.log(check)
    return !(check == -1);
}

module.exports = middleware