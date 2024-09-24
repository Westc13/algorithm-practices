class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:
        def get_first_digit(n):
            while n >= 10:
                n //= 10
            return n
        l = len(nums)
        beautiful_pairs = 0

        for i in range(l):
            for j in range(i + 1, l):
                first_digit_i = get_first_digit(nums[i])
                last_digit_j = nums[j] % 10

                if math.gcd(first_digit_i, last_digit_j) == 1:
                    beautiful_pairs += 1
        return beautiful_pairs