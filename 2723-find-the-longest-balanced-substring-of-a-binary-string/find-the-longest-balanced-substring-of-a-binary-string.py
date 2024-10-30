class Solution:
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        max_length = 0
        i = 0

        while i < len(s):
            count_0 = 0
            count_1 = 0

            while i < len(s) and s[i] == '0':
                count_0 += 1
                i += 1
            while i < len(s) and s[i] == '1':
                count_1 += 1
                i += 1
            balanced_length = 2 * min(count_0, count_1)
            max_length = max(max_length, balanced_length)
        return max_length
