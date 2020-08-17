const path = require('path');
const CategoryModel = require(path.resolve(__dirname, '../database/models/Category'));

module.exports = (req, res, next) => {
    if (!res.locals.categories) {
        return CategoryModel.findAll().then(function (categories) {
            res.locals.categories = categories;
            return next();
        })
    }else{
        return next();
    }
}