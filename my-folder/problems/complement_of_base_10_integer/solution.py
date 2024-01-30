class Solution:
    def bitwiseComplement(self, n: int) -> int:
        n_bin = bin(n)[2:]
        complement_bin = ''. join(['1' if bit == '0' else '0' for bit in n_bin])
        complement_dec = int(complement_bin, 2)
        return complement_dec