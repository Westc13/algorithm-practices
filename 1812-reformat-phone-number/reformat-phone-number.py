class Solution:
    def reformatNumber(self, number: str) -> str:
        digits = number.replace(' ', '').replace('-', '')
        blocks = []
        i = 0
        n = len(digits)

        while n - i > 4:
            blocks.append(digits[i: i+3])
            i += 3
        if n - i == 4:
            blocks.append(digits[i: i+2])
            blocks.append(digits[i+2: i+4])
        else:
            blocks.append(digits[i:])
        return '-'.join(blocks)