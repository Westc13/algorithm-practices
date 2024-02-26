class Solution:
    def reverseBits(self, n: int) -> int:
       bin_str = bin(n)[2:].zfill(32)
       reversed_str = bin_str[::-1]
       reversed_dec = int(reversed_str, 2)
       return reversed_dec