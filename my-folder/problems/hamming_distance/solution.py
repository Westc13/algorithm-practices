class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        xor_result = x ^ y
        count = 0
        while xor_result > 0:
            count += xor_result & 1
            xor_result >>= 1
        return count
        
        # x_bin = bin(x)[2:]
        # y_bin = bin(y)[2:]
        # max_len = max(len(x_bin), len(y_bin))

        # x_bin = x_bin.zfill(max_len)
        # y_bin = y_bin.zfill(max_len)

        # count = 0
        # for i in range(max_len):
        #     if x_bin[i] != y_bin[i]:
        #         count += 1
        # return count