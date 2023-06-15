class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        result = []
        for i in range(len(words)):
            for j in range(len(words)):
                if i == j:
                    continue
                if words[i] in words[j] and words[i] not in result and len(words[i])<len(words[j]):
                        result.append(words[i])
        return result
