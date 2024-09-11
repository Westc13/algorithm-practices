class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        def is_strictly_increasing(arr):
            for i in range(1, len(arr)):
                if arr[i] <= arr[i - 1]:
                    return False
            return True
        n = len(nums)
        incremovable_count = 0

        for i in range(n):
            for j in range(i, n):
                left_part = nums[:i]
                right_part = nums[j+1:]
                remaining_array = left_part + right_part
                if is_strictly_increasing(remaining_array):
                    incremovable_count += 1
        return incremovable_count