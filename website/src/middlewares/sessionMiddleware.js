const path = require('path');
const jsonDbService = require(path.resolve(__dirname, '../services/jsonDbService'));
const UserModel = require(path.resolve(__dirname, '../database/models/User'));

module.exports = (req, res, next) => {
    res.locals.user = false;
    if (req.session.user) {
        res.locals.user = req.session.user;
        return next();
    } else if (req.cookies.email) {
        UserModel.findOne({
            where: {
                email: req.cookies.email
            }
        }).then((user) => {
            delete user.password;
            req.session.user = user;
            res.locals.user = user;
            return next();
        })

    } else {
        return next();
    }
}