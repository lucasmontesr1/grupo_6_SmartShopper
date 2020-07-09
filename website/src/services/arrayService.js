module.exports = (arr, value) => {
    return arr.filter(function (ele) {
        return ele.id != value;
    });
};