class Solution:
    def fillCups(self, amount: List[int]) -> int:
        seconds = 0
        while sum(amount):
            amount.sort()
            seconds += 1
            amount[2] -= 1
            amount[1] = max(0, amount[1] - 1)
        return seconds