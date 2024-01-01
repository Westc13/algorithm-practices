class Solution:
    def capitalizeTitle(self, title: str) -> str:
        title = title.lower()
        words = title.split()
        result = []
        for word in words:
            if len(word) > 2:
                word = word.capitalize()
                result.append(word)
            else:
                result.append(word)

        return ' '.join(result)
        