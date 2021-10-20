const {count} = require('./helpers');

// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if(message.length > letters.length) return false;
    const messageCount = count(message);
    const lettersCount = count(letters); 
    for(let key in messageCount){
        if(!lettersCount[key] || messageCount[key] > lettersCount[key]) return false; 
    }
    return true; 
}



module.exports = constructNote; 