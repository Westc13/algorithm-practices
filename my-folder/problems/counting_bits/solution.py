class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = [0]*(n+1)
        for i in range(1, n+1):
            ans[i] = ans[i>>1] + (i & 1)
        return ans

        # ans = []
        # for el in range(int(n+1)):
        #     count = 0
        #     el_bin = bin(el)[2:]
        #     for bit in el_bin:
        #         if bit == '1':
        #             count += 1
        #     ans.append(count)
        # return ans
            