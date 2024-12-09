class Solution:
    def smallestNumber(self, n: int) -> int:
        def is_all_set_bits(x):
            return all(c == '1' for c in bin(x)[2:])
        x = n
        while not is_all_set_bits(x):
            x += 1
        return x