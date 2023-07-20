class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        num_counts = {}
        result = 0

        for num in nums:
            num_counts[num] = num_counts.get(num, 0) + 1
            if k !=0:
                result += num_counts.get(num + k, 0) + num_counts.get(num - k, 0)
            else:
                result += num_counts[num] - 1
        return result