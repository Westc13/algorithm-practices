class Solution:
    def firstUniqChar(self, s: str) -> int:
        s_char = [char for char in s]
        char_freq = Counter(s_char)
        for i, char in enumerate(s):
            if char_freq[char] == 1:
                return i
        return -1
        