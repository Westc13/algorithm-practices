class Solution:
    def isThree(self, n: int) -> bool:
        divisors = []
        for i in range(1, n+1):
            if n % i == 0:
                divisors.append(i)
        return True if len(divisors) == 3 else False