class Solution:
    def countDistinctIntegers(self, nums: List[int]) -> int:
        unique = set()
        for num in nums:
            unique.add(num)
            reversed_num = int(str(num)[::-1])
            unique.add(reversed_num)
        return len(unique)