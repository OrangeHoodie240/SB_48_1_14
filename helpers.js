function count(collection){
    if(typeof collection === 'string'){
        collection = collection.split('');
    }

    return collection.reduce((a,b)=>{
        a[b] = (a[b] || 0) + 1; 
        return a; 
    }, {});
}



module.exports = {count};