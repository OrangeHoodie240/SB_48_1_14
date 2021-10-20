// add whatever parameters you deem necessary
function countPairs(nums, target) {
    if(nums.length === 0) return 0; 

    let set = new Set(nums); 
    let count =  0; 

    for(let num of nums){
        let missing = target - num;
        if(missing === num) continue; // assume no duplicates 

        if(set.has(missing)){
            count++; 
            set.delete(num); // so it does not count again when we get to missing        
        }
    }

    return count; 
}

module.exports = countPairs; 