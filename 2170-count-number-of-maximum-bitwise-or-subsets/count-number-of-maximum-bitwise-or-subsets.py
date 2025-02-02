class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        max_or = 0
        count = 0

        for num in nums:
            max_or |= num
        
        def backtrack(i, curr_or):
            nonlocal count
            if i == len(nums):
                if curr_or == max_or:
                    count += 1
                return
            backtrack(i + 1, curr_or | nums[i])
            backtrack(i + 1, curr_or)
        backtrack(0, 0)

        return count