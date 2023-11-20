/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let key = Object.keys(obj);
    return (key.length ===0)
};