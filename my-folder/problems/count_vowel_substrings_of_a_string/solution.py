class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        vowels = set('aeiou')
        count = 0

        for i in range(len(word)):
            for j in range(i + 4, len(word)):
                substring = word[i:j +1]
                if set(substring) == vowels:
                    count += 1
        return count
        