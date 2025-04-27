class Solution:
    def minimumPushes(self, word: str) -> int:
        freq = Counter(word)
        freq_list = sorted(freq.values(), reverse=True)
        result = 0
        for idx, f in enumerate(freq_list):
            depth = idx // 8 + 1
            result += depth * f
        return result