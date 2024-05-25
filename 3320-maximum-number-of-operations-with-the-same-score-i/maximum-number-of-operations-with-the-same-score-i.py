class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        first_score = nums[0] + nums[1]
        operations = 1
        nums = nums[2:]

        while len(nums) >= 2:
            current_score = nums[0] + nums[1]
            if current_score == first_score:
                operations += 1
                nums = nums[2:]
            else:
                break
        return operations