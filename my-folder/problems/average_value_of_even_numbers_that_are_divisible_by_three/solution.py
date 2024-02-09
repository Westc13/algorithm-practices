class Solution:
    def averageValue(self, nums: List[int]) -> int:
        nums_meet_criteria = []
        for num in nums:
            if num % 6 == 0:
                nums_meet_criteria.append(num)
        return int(sum(nums_meet_criteria) / len(nums_meet_criteria)) if len(nums_meet_criteria) != 0 else 0
        