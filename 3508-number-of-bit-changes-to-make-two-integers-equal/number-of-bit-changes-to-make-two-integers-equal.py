class Solution:
    def minChanges(self, n: int, k: int) -> int:
        if n == k:
            return 0
        if n & k != k:
            return -1
        bit_diff = n ^ k
        count = 0

        while bit_diff > 0:
            if bit_diff & 1:
                count += 1
            bit_diff >>= 1
        return count