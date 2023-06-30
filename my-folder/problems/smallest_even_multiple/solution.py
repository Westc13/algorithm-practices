class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        if n%n == 0 and n%2 ==0:
            res = n
        else:
            res = n*2

        return res