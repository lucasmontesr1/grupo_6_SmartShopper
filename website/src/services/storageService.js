const multer = require('multer');
const path = require('path');

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = {
    product : multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, path.resolve(__dirname, '..', '..', 'public', 'img'));
        },
        filename: function(req, file, cb) {
            cb(null, 'item' + '-' + Date.now() + '-' + getRandomArbitrary(1, 10000) + path.extname(file.originalname));
            }
    }),
    users: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, '..', '..', 'public', 'img', 'users'));
            },
        filename: function (req, file, cb) {
            cb(null, 'user' + '-' + Date.now() + '-' + getRandomArbitrary(1, 10000) + path.extname(file.originalname));
            }
    })
}

