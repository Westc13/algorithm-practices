class Solution:
    def countTriples(self, n: int) -> int:
        result = 0
        for a in range(1, n+1):
            for b in range(1, n+1):
                c_squared = a**2 + b**2
                if c_squared <= n**2:
                    c = int(c_squared**0.5)
                    if c<= n and c_squared == c**2:
                        result += 1

        return result