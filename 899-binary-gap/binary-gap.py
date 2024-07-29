class Solution:
    def binaryGap(self, n: int) -> int:
        bin_str = bin(n)[2:]

        ones_positions = []

        for index, bit in enumerate(bin_str):
            if bit == '1':
                ones_positions.append(index)

        if len(ones_positions) < 2:
            return 0
        
        max_distance = 0
        for i in range(1, len(ones_positions)):
            max_distance = max(max_distance, ones_positions[i] - ones_positions[i-1])
        return max_distance