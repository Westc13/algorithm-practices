class Solution:
    def reformat(self, s: str) -> str:
        digits = [char for char in s if char.isdigit()]
        letters = [char for char in s if char.isalpha()]

        if abs(len(digits) - len(letters)) > 1:
            return ''
        
        reformatted = []
        is_digits_longer = len(digits) > len(letters)
        for i in range(len(s)):
            if i % 2 == 0:
                reformatted.append(digits.pop(0) if is_digits_longer else letters.pop(0))
            else:
                reformatted.append(letters.pop(0) if is_digits_longer else digits.pop(0))
        return ''.join(reformatted)