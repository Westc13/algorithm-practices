class Solution:
    def areNumbersAscending(self, s: str) -> bool:
        numbers = [int(word) for word in s.split() if word.isdigit()]
        for i in range(1, len(numbers)):
            if numbers[i] <= numbers[i-1]:
                return False
        return True
        