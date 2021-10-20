// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0; 
    let right = nums.length -1; 
    if(right < 0) return nums; 

    while(true){
        let digitLeft = nums[left]; 
        let digitRight = nums[right]; 
        if(digitLeft < 0 && digitRight >= 0){
            nums[left] = digitRight; 
            nums[right] = digitLeft; 
            left++; 
            right--; 
        }
        else if (digitLeft >= 0 && digitRight < 0){
            left++; 
            right--; 
        } 
        else if(digitLeft < 0 && digitRight < 0){
            right--;
        }
        else if(digitLeft >= 0 && digitRight >= 0){
            left++; 
        }

        if(left >= right) return nums;
    }

}


module.exports = separatePositive; 