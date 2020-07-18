const path = require('path');
const jsonDbService = require(path.resolve(__dirname, '../services/jsonDbService'))
module.exports = {
    checkUserExist:(req, res, next) => {
        let userJsonArray = jsonDbService.getFile('users');
        if (checkEmailandDoc(userJsonArray, req.body)) {
            console.log('User already exist')
            return
        }
        console.log('New user')
        next()
    }
}
 
function checkEmailandDoc(userJsonArray, reqUser) {
    let check = userJsonArray.findIndex((user) => {
        return user.doc == reqUser.doc || user.email == reqUser.email
    });
    return !(check == -1);
}  