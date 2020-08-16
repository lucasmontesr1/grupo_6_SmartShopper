const path = require('path');
const UserModel = require(path.resolve(__dirname, '../database/models/User'));

module.exports = (req, res, next) => {
    res.locals.user = false;
    if (req.session.user) {
        res.locals.user = req.session.user;
        return next();
    } else if (req.cookies.email) {
        return getUserbyEmail.then((user) => {
            delete user.password;
            req.session.user = user;
            res.locals.user = user;
            return next();
        })

    } else {
        return next();
    }
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