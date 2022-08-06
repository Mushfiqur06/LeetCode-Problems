/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    
    let result = nums.map((val, index) => {
        let sum = 0;
        for(let i = 0; i < index + 1; i++){
            sum += nums[i]
        }
        return sum
    })
    
    
    return result;
};