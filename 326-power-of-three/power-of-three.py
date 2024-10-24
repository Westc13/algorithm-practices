class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        # if n <= 0:
        #     return False
    
        # while n % 3 == 0:
        #     n //= 3
        # return n == 1

        largest_power_of_three = 1162261467
        return n > 0 and largest_power_of_three % n == 0