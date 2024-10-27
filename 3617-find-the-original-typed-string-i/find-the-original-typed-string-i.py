class Solution:
    def possibleStringCount(self, word: str) -> int:
        possible_strings = 1
        i = 0
        n = len(word)

        while i < n:
            start = i
            while i < n - 1 and word[i] == word[i + 1]:
                i += 1
            sequence_length = i - start + 1
            if sequence_length > 1:
                possible_strings += sequence_length - 1

            i += 1
        return possible_strings