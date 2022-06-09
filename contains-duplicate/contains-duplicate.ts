function containsDuplicate(nums: number[]): boolean {
  if (nums.length <= 1) return false;

  let result: number[] = nums.filter(
    (value: number, index: number, arr: number[]) =>
      arr.indexOf(value) !== index
  );
  if (result.length) return true;
  return false;
}


