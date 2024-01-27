class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        current_length_0 = 0
        current_length_1 = 0
        max_length_0 = 0
        max_length_1 = 0

        for char in s:
            if char == '0':
                current_length_0 += 1
                current_length_1 = 0
            else:
                current_length_1 += 1
                current_length_0 = 0

            max_length_0 = max(max_length_0, current_length_0)
            max_length_1 = max(max_length_1, current_length_1)

        return max_length_1 > max_length_0