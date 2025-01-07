class Solution:
    def maxLength(self, nums: List[int]) -> int:
        def lcm(a, b):
            return (a * b) // gcd(a, b)
        def lcm_list(arr):
            return reduce(lcm, arr)
        def gcd_list(arr):
            return reduce(gcd, arr)
        n = len(nums)
        max_length = 0

        for i in range(n):
            prod = 1
            subarray = []
            for j in range(i, n):
                subarray.append(nums[j])
                prod *= nums[j]
                sub_gcd = gcd_list(subarray)
                sub_lcm = lcm_list(subarray)
                if prod == sub_gcd * sub_lcm:
                    max_length = max(max_length, j - i + 1)
        return max_length