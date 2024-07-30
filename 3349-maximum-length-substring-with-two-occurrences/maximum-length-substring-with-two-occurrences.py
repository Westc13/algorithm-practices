class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        char_count = {}
        left = 0
        max_length = 0

        for right in range(len(s)):
            if s[right] in char_count:
                char_count[s[right]] += 1
            else:
                char_count[s[right]] = 1
            while any(count > 2 for count in char_count.values()):
                char_count[s[left]] -= 1
                if char_count[s[left]] == 0:
                    del char_count[s[left]]
                left += 1
            current_length = right - left + 1
            max_length = max(max_length, current_length)
        return max_length