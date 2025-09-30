function twoSum(nums: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const getTargetValue = target - nums[i];

    if (map.has(getTargetValue)) {
      return [map.get(getTargetValue), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
