class Solution:
    def largestInteger(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        n = len(nums)

        for i in range(n - k + 1):
            subarray = nums[i: i + k]
            unique_elements = set(subarray)
            for num in unique_elements:
                count[num] += 1
        result = -1
        for num, freq in count.items():
            if freq == 1:
                result = max(result, num)
        return result