class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        factors_a = set([x for x in range(1, a+1, 1) if a%x == 0])
        factors_b = set([y for y in range(1, b+1, 1) if b%y == 0])
        if (factors_a & factors_b):
            return len(factors_a & factors_b)
        else:
            return 0
        
