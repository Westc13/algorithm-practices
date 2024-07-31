class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        words = text.split()
        result = []

        for i in range(len(words) - 1):
            if words[i] == first and words[i+1] == second:
                if i+2 < len(words):
                    result.append(words[i+2])
        return result