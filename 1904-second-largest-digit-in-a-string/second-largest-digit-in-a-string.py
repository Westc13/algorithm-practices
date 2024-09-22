class Solution:
    def secondHighest(self, s: str) -> int:
        numbers = set()
        for c in s:
            if c.isnumeric():
                numbers.add(int(c))
        numbers = sorted(numbers, reverse=True)
        if len(numbers) < 2:
            return -1
        else:
            return numbers[1]