class Solution:
    def minimumSubarrayLength(self, nums: List[int], k: int) -> int:
        n = len(nums)
        count = [0] * 32
        result = n + 1
        l = r = 0
        for i, x in enumerate(nums):
            l |= x
            for m in range(32):
                if x >> m & 1:
                    count[m] += 1
            while l >= k and r <= i:
                result = min(result, i - r + 1)
                y = nums[r]
                for m in range(32):
                    if y >> m & 1:
                        count[m] -= 1
                        if count[m] == 0:
                            l ^= 1 << m
                r += 1
        return -1 if result > n else result