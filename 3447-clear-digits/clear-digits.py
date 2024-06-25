class Solution:
    def clearDigits(self, s: str) -> str:
        s = list(s)

        while any(char.isdigit() for char in s):
            digit_index = next(i for i, char in enumerate(s) if char.isdigit())

            for j in range(digit_index - 1, -1, -1):
                if not s[j].isdigit():
                    s.pop(digit_index)
                    s.pop(j)
                    break
        return ''.join(s)