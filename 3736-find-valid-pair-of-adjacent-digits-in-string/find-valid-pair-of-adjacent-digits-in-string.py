class Solution:
    def findValidPair(self, s: str) -> str:
        freq = Counter(s)
        for i in range(len(s) - 1):
            first, second = s[i], s[i + 1]
            if first != second:
                if freq[first] == int(first) and freq[second] == int(second):
                    return first + second
        return ''