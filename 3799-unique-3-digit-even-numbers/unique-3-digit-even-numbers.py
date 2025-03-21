class Solution:
    def totalNumbers(self, digits: List[int]) -> int:
        even_digits = [d for d in digits if d % 2 == 0]
        unique_numbers = set()
        for even_digit in even_digits:
            remaining_digits = digits[:]
            remaining_digits.remove(even_digit)

            for first_two_digits in permutations(remaining_digits, 2):
                if first_two_digits[0] != 0:
                    number = int(''.join(map(str, first_two_digits)) + str(even_digit))
                    unique_numbers.add(number)
        return len(unique_numbers)