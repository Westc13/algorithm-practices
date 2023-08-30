class Solution:
    def repeatedCharacter(self, s: str) -> str:
        letter_holder = []
        result = ''
        for letter in s:
            if letter not in letter_holder:
                letter_holder.append(letter)
            else:
                result = letter
                break
        return result
        
