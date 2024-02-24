class Solution:
    def are_anagrams(self, word1, word2):
        return Counter(word1) == Counter(word2)

    def removeAnagrams(self, words: List[str]) -> List[str]:
        i = 1
        while i < len(words):
            if self.are_anagrams(words[i - 1], words[i]):
                words.pop(i)
            else:
                i += 1
        return words