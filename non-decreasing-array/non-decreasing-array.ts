function checkPossibility(nums: number[]): boolean {
  let isFalse = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (isFalse || (nums[i] > nums[i + 1] && nums[i - 1] > nums[i + 1])) {
        console.log(nums[i]);
        return false;
      } else {
        isFalse = true;
      }
    }
  }

  return isFalse;
}
