class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target in nums:
            return nums.index(target)
        else:
            if target < nums[0]: return 0
            counter = 1
            while counter <= len(nums):
                for _t in nums:
                    if _t == (target - counter):
                        return nums.index(_t) + 1
                counter += 1