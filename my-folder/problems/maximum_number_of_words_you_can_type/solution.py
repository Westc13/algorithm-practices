class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        text_words = text.split(' ')
        brokenLetters = set(brokenLetters)
        count = 0
        for word in text_words:
            can_type = True
            for char in word:
                if char in brokenLetters:
                    can_type = False
            if can_type:
                count += 1
        return count
                      
        