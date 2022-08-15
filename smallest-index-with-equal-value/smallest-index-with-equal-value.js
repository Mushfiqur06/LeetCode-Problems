/**
 * @param {number[]} nums
 * @return {number}
 */
 var smallestEqual = function(nums) {
    let indexArr = [];
    for(let i = 0; i < nums.length; i++){
        if(i % 10 == nums[i]) indexArr.push(i)
    }
    
    return !indexArr.length ? -1 : indexArr[0]
};