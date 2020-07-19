const bcrypt = require('bcryptjs');
const path = require('path');
const jsonDbService = require(path.resolve(__dirname, '../services/jsonDbService'));
const {
    validationResult
} = require('express-validator')

const usersController = {
    create: (req, res) => {
        console.log('Users controller')
        let salt = bcrypt.genSaltSync(10);
        let user = req.body;
        let userJsonArray = jsonDbService.getFile('users');
        let newUser = {
            id: bcrypt.hashSync('user.doc' + user.email, salt),
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: bcrypt.hashSync(user.password, salt),
            img: req.file ? req.file.filename : "no-image",
            document: req.body.document
        }
        userJsonArray.push(newUser);
        jsonDbService.updateFile('users', userJsonArray);
        res.redirect('/')
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
                console.log(errors)
                if (!errors.isEmpty) {
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
                let userJsonArray = jsonDbService.getFile('users');
                let loggedUser = userJsonArray.find(user => user.email == req.body.email);
                delete loggedUser.password;
                req.session.user = loggedUser;

                if (req.body.keepMeLogged) {
                    res.cookie('email', loggedUser.email, {
                        maxAge: 1000 * 60 * 60 * 24
                    });
                };
                res.redirect('/');
        }
    }
}

module.exports = usersController;