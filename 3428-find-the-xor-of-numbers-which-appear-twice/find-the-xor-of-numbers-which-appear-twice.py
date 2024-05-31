class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        num_count = Counter(nums)
        duplicate_nums = [num for num, count in num_count.items() if count == 2]

        result = 0
        for num in duplicate_nums:
            result ^= num
        return result