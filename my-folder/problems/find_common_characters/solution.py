class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        if not words:
            result = []

        result = list(words[0])

        for word in words[1:]:
            new_result = []

            for char in word:
                if char in result:
                    new_result.append(char)
                    result.remove(char)
            result = new_result
        return result