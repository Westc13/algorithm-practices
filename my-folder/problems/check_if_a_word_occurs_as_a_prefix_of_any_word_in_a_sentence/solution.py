class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        words = sentence.split(' ')
        
        for i, word in enumerate(words, 1):
            if re.findall(f'^{searchWord}', word):
                return i
        return -1