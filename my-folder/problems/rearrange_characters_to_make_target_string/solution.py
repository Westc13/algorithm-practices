class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        s_char_count = Counter(s)
        target_char_count = Counter(target)

        max_copies = float('inf')

        for char in target_char_count:
            if char not in s_char_count:
                return 0
            max_copies = min(max_copies, s_char_count[char] // target_char_count[char])
        return max_copies