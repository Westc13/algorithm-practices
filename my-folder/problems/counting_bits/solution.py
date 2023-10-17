class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = []
        for el in range(int(n+1)):
            count = 0
            el_bin = bin(el)[2:]
            for bit in el_bin:
                if bit == '1':
                    count += 1
            ans.append(count)
        return ans
            