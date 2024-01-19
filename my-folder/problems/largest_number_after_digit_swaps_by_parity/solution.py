class Solution:
    def largestInteger(self, num: int) -> int:
        digits = [int(digit) for digit in str(num)]

        even_digits = [digit for digit in digits if digit % 2 == 0]
        odd_digits = [digit for digit in digits if digit % 2 != 0]

        even_digits.sort(reverse=True)
        odd_digits.sort(reverse=True)

        result = []
        for digit in digits:
            if digit % 2 == 0:
                result.append(even_digits.pop(0))
            else:
                result.append(odd_digits.pop(0))

        result_num = int(''.join(map(str, result)))

        return result_num