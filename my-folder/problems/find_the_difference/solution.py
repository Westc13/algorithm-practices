class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        s_char_count = Counter(s)
        t_char_count = Counter(t)
        for char, freq in t_char_count.items():
            if char not in s_char_count or freq - s_char_count[char] == 1:
                return char