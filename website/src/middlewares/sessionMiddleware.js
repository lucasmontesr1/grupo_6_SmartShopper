const path = require('path');
const jsonDbService = require(path.resolve(__dirname, '../services/jsonDbService'));

module.exports = (req, res, next) => {
    res.locals.user = false;
    if (req.session.user) {
        res.locals.user = req.session.user;
        return next();
    } else if (req.cookies.email){
        let user = jsonDbService.getFile('users').find( user => user.email == req.cookies.email);
        delete user.password;
        req.session.user = user;
        res.locals.user = user;
        return next();
    } else {
        return next();
    } 
}