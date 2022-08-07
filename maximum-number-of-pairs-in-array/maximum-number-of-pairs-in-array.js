/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var numberOfPairs = function(nums) {
    if(nums.length === 1) return [0, 1]
    nums.sort((a, b) => a - b)
    
    let i = 0
    let count = 0
    let rem = 0
    while (i < nums.length) {
        
        if (nums[i] === nums[i + 1]) {
            count++
            i++
        } else {
            rem++
        }
        
        i++
    }
    
    return [count, rem]
    
};