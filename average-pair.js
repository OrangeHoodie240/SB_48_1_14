// add whatever parameters you deem necessary
function averagePair(nums, target) {
    let avg = null;
    let left = 0; 
    let right = nums.length -1; 

    if(right === -1) return false; // empty array

    while(true){
        const leftVal = nums[left]; 
        const rightVal = nums[right];
        avg = (leftVal + rightVal) / 2; 
        if(avg === target){
            return true; 
        }
        else if(avg > target){
            right--; 
        }
        else if(avg < target){
            left++; 
        }

        if(left === right) return false;
    }
}


module.exports = averagePair;