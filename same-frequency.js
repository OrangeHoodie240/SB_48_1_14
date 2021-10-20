const {count} = require('./helpers');

// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    int1 = int1 + ''; 
    int2 = int2 + ''; 
    if(int1.length !== int2.length) return false;

    int1 = count(int1); 
    int2 = count(int2);

    for(let digit in int1){
        if(int1[digit] !== int2[digit]) return false;
    }
    return true; 
}


module.exports = sameFrequency; 