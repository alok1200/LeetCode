/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const compactObj = Array.isArray(obj) ? [] : {};
    for(const Key in obj){
        let elem = obj[Key];
        if(elem){
            if(typeof elem === "object") elem = compactObject(elem);
            Array.isArray(obj) ? compactObj.push(elem) : compactObj[Key] = elem;
        }
    }
    return compactObj;
};