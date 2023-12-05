class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        result = []
        s_char = [c for c in s]
        for i in range(0, len(s_char), k):
            result.append(''.join(s_char[i:i+k]))
        if len(result[-1]) < k:
            result[-1] += (k - len(result[-1])) * fill
        return result
