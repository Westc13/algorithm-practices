class Solution:
    def isFascinating(self, n: int) -> bool:
        joined = str(n) + str(n*2) + str(n*3)
        if len(joined) != 9:
            return False
        if set(joined) == set('123456789'):
            return True
        return False