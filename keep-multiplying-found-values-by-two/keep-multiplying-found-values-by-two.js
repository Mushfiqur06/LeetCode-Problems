/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    if(!nums.includes(original)) return original;
    
    let result = original;
    
    for(let i = 0; i < nums.length; i++){
        if(nums.includes(result)){
            result *= 2;
        }
    }
    
    return result;
};