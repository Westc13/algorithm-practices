class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        def encode(word):
            mapping = {}
            code = []
            next_code = 0
            for ch in word:
                if ch not in mapping:
                    mapping[ch] = next_code
                    next_code += 1
                code.append(mapping[ch])
            return code
        pattern_code = encode(pattern)
        result = [word for word in words if encode(word) == pattern_code]
        return result