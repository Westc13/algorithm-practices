class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        n = len(nums)

        if n == 0:
            return result
        range_start = nums[0]

        for i in range(1, n):
            if nums[i] != nums[i-1] + 1:
                if range_start == nums[i-1]:
                    result.append(str(range_start))
                else:
                    result.append(f'{range_start}->{nums[i-1]}')

                range_start = nums[i]
        if range_start == nums[-1]:
            result.append(str(range_start))
        else:
            result.append(f'{range_start}->{nums[-1]}')
        return result