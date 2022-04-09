// function twoSum(nums, target){
//     for(let i = 0; i <= nums.length - 1; i++){
//         for(let j = i + 1; i <= nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
// }

// let nums = [3,2,4];
// let target = 6;

// console.log(twoSum(nums, target))

// Another Solution

function twoSum(nums, target){
    let numsObj = {};
    nums.forEach((item, index) => numsObj[item] = index)
    
    for(let i = 0; i <= nums.length - 1; i++){
        let targetValue = target - nums[i]
        console.log(numsObj[targetValue] !== i)
        if(numsObj[targetValue] !== undefined && numsObj[targetValue] !== i){
            return [i, numsObj[targetValue]]
        }
    }
}
let nums = [7,11,2,15];
let target = 9;
console.log(twoSum(nums, target))