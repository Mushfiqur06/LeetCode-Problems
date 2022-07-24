function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while(high >= low){
    let mid = Math.floor((low + high) / 2);
    if(target === nums[mid]){
        return mid;
    }

    if(target > nums[mid]){
        low = mid + 1;
    }else{
        high = mid - 1;
    }
  }
  return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 9));
