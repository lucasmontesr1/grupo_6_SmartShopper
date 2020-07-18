const bcrypt = require('bcryptjs');
const path = require('path');
const jsonDbService = require(path.resolve(__dirname, '../services/jsonDbService'));

const usersController = {
    create:(req, res) => {
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
            document: "user.document"
        }
        userJsonArray.push(newUser);
        jsonDbService.updateFile('users', userJsonArray);
        res.redirect('/')
    },
    get: (req, res) => {
        res.render(path.resolve(__dirname, '../views/userRegister.ejs'));
    }
}

module.exports = usersController;