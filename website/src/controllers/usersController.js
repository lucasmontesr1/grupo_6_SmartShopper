const bcrypt = require('bcryptjs');
const path = require('path');
const UserModel = require(path.resolve(__dirname, '../database/models/User'));
//const sequelize = require(path.resolve(__dirname, '../database/connection.js'));
const {
    validationResult
} = require('express-validator');

const usersController = {
    create: (req, res) => {
        let salt = bcrypt.genSaltSync(10);
        let user = req.body;
        let newUser = {
            id: bcrypt.hashSync('user.doc' + user.email, salt),
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: bcrypt.hashSync(user.password, salt),
            img: req.file ? req.file.filename : "no-image",
            document: user.document
        }
        UserModel.create({
            firstName: newUser.name,
            surname: newUser.surname,
            email: newUser.email,
            password: newUser.password,
            img: newUser.img,
            document: newUser.document
        }).then(() => console.log('New user created')).catch(err => console.log(err));
        res.redirect('/users/login')
    },
    get: (req, res) => {
        res.render(path.resolve(__dirname, '../views/userRegister.ejs'));
    },
    login: (req, res) => {
        console.log('user controller')
        switch (req.method) {
            case 'GET':
                console.log('users GET controller')
                res.render(path.resolve(__dirname, '../views/usersLogin.ejs'), {
                    existErr: false
                });
                break;
            case 'POST':
                console.log('users POST controller')
                let errors = validationResult(req);
                if (errors.errors.isEmpty) {
                    console.log('Errors')
                    let parsedErrors = {};
                    errors.errors.forEach((err) => {
                        parsedErrors[err.param] = err.msg
                    });
                    res.render(path.resolve(__dirname, '../views/usersLogin.ejs'), {
                        parsedErrors,
                        oldInfo: req.body,
                        existErr: true
                    });
                    break;
                }
                console.log('Not errors');

                UserModel.findOne({
                    where: {
                        email: req.body.email
                    }
                }).then((user) => {
                    delete user.password
                    req.session.user = user;
                    if (req.body.keepMeLogged) {
                        res.cookie('email', user.email, {
                            maxAge: 1000 * 60 * 60 * 24
                        });
                    };
                    res.redirect('/')
                }).catch((err)=>{
                    console.log('Error when logging in. [method:usercontroller_login]')
                });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email', null, {
            maxAge: -1
        });
        res.redirect('/');
    }
}

module.exports = usersController;