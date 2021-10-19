// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if(message.length > letters.length) return false;
    const messageCount = count(message);
    const lettersCount = count(letters); 
    for(let key in messageCount){
        if(messageCount[key] !== lettersCount[key]) return false; 
    }
    return true; 
}


function count(collection){
    if(typeof collection === 'string'){
        collection = collection.split('');
    }

    return collection.reduce((a,b)=>{
        a[b] = (a[b] || 0) + 1; 
        return a; 
    }, {});
}