class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        even_nums = [num for num in nums if num % 2 == 0]

        if not even_nums:
            return -1
        count = Counter(even_nums)

        most_frequent = min(count, key=lambda x: (-count[x], x))

        return most_frequent