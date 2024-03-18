class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        chars = ''
        for word in words:
            chars += word
        chars_freq = Counter(chars)
        for freq in chars_freq.values():
            if freq % len(words) != 0:
                return False
        return True