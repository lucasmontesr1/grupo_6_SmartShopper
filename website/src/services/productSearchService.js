const path = require('path');
const jsonDbService = require(path.resolve(__dirname, './jsonDbService'));

function productFilter(productArray, key, value) {
    productArray = productArray.filter(product => product[key] == value);
    console.log(productArray);
    return productArray
};

module.exports = function ProductSearch(query) {
    let queryArray = Object.entries(query);
    let productArray = jsonDbService.getFile('products');
    for(let i = 0; i < queryArray.length; i++) {
        productArray = productFilter(productArray, queryArray[i][0], queryArray[i][1]);
    };
    return productArray
}