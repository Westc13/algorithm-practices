class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        if ch not in word:
            return word
        index_of_char = word.find(ch)
        left_substring = word[:index_of_char + 1]
        right_substring = word[index_of_char + 1 :]
        left_reversed = left_substring[::-1]
        result = left_reversed + right_substring
        return result
        