/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
    if(nums.length === 1 & nums[0] === 0) return nums;
    nums.sort((a, b) => a - b)
    let count = 0;
    let i = 0;
    
    while(i < nums.length){
        if(nums[i] === 0){
            i++;
            continue;
        }else{
            let subtract = nums[i];
            for(let j = i; j < nums.length; j++){
                nums[j] -= subtract;
            }
        }
        count++;
    }
    
    
    
    return count
};