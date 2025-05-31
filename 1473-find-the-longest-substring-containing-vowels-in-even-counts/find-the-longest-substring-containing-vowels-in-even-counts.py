class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        vowel_to_bit = {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
        state = 0
        seen = {0: -1}
        max_len = 0

        for i, char in enumerate(s):
            if char in vowel_to_bit:
                bit = vowel_to_bit[char]
                state ^= (1 << bit)
            if state in seen:
                max_len = max(max_len, i - seen[state])
            else:
                seen[state] = i
        return max_len