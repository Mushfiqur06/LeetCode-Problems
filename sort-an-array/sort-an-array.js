/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    if(nums.length <= 1) return nums;

    const halfPoint = Math.ceil(nums.length / 2)
    const firstHalf = sortArray(nums.splice(0, halfPoint));
    const secondHalf = sortArray(nums.splice(-halfPoint))
    return mergeArr(firstHalf, secondHalf)
};

function mergeArr(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++
        }else{
            result.push(arr1[i])
            i++
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }

    return result;
}

console.log(sortArray([5,2,3,1]))