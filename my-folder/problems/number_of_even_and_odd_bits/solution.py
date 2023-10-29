class Solution:
    def evenOddBit(self, n: int) -> List[int]:
        even = 0
        odd = 0
        bin_n = bin(n)[2:]
        print(bin(2))
        for i, digit in enumerate(reversed(bin_n)):
            if int(digit) == 1:
                if i % 2 == 0:
                    even += 1
                else:
                    odd += 1
        return [even, odd]
        