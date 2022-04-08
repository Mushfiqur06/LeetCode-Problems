def twoSum(self, nums: List[int], target: int) -> List[int]{
    length int= len(nums) - 1;
    for i in range(0, length):
        for j in range(i + 1, length):
            if nums[i] + nums[j] == target:
                return [i, j]
}