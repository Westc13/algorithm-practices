class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        nums_sorted = sorted(nums)

        averages = []
        n = len(nums_sorted)

        for i in range(n // 2):
            min_element = nums_sorted[i]
            max_element = nums_sorted[-1 - i]
            average = (min_element + max_element) / 2
            averages.append(average)
        return min(averages)