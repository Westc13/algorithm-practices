class Solution:
    def findGCD(self, nums: List[int]) -> int:
        min_num_divisors = []
        max_num_divisors = []
        for n in range(1, min(nums)+1):
            if min(nums) % n == 0:
                min_num_divisors.append(n)
        for m in range(1, max(nums)+1):
            if max(nums) % m == 0:
                max_num_divisors.append(m)
        common_divisors = list(set(min_num_divisors).intersection(max_num_divisors))
        return max(common_divisors)
        


            