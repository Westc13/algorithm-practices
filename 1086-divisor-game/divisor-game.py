class Solution:
    def divisorGame(self, n: int) -> bool:
        memo = {}
        
        def canWin(n):
            if n == 1:
                return False
            if n in memo:
                return memo [n]
            for x in range(1, n):
                if n % x == 0 and not canWin(n - x):
                    memo[n] = True
                    return True
            memo[n] = False
            return False
        return canWin(n)