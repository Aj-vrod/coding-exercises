# TO DO: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
# You must write an algorithm with O(log n) runtime complexity.

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