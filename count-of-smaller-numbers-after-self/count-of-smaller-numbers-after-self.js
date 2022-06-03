/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function(nums) {
    if(nums[0] < 0 || (nums[0] < 0 && nums[1] < 0)) return nums;

    let result = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            if(nums[i] > nums[j]){
                result.push(nums[j])
            }
        }
    }

    return result;
};

console.log(countSmaller([5,2,6,1]))