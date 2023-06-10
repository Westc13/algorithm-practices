class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        first_row = set('qwertyuiop')
        second_row = set('asdfghjkl')
        third_row = set('zxcvbnm')
        result = []
        for word in words:
            lowercase_word = set(word.lower())
            if lowercase_word.issubset(first_row) or lowercase_word.issubset(second_row) or lowercase_word.issubset(third_row):
                result.append(word)
        return result