class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        upper_count = sum(1 for char in word if char.isupper())

        if upper_count == len(word) or upper_count == 0:
            return True
        
        if upper_count == 1 and word[0].isupper():
            return True
        
        return False