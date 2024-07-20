class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        lowercase_set = set()
        uppercase_set = set()

        for char in word:
            if char.islower():
                lowercase_set.add(char)
            elif char.isupper():
                uppercase_set.add(char)
        special_chars = lowercase_set.intersection(set(char.lower() for char in uppercase_set))

        return len(special_chars)