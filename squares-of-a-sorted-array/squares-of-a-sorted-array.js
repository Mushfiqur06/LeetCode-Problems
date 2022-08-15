/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let result = []
      nums.forEach(item => result.push(item * item))
    
    return result.sort((a, b) => a - b);
};