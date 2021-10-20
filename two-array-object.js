// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};
    for(let i = 0; i < keys.length; i++){
        let value = values[i]; 
        let key = keys[i];
        if(value === undefined){
            obj[key] = null; 
            continue; 
        }
        obj[key] = value; 
    }
    return obj; 
}


module.exports = twoArrayObject; 
