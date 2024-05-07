class Solution:
    def longestPalindrome(self, s: str) -> int:
        freq_map = {}
        for char in s:
            freq_map[char] = freq_map.get(char, 0) + 1

        length = 0

        for freq in freq_map.values():
            length += freq // 2 * 2
            if freq % 2 == 1 and length % 2 == 0:
                length += 1
        return length