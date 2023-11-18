class Solution:
    def totalMoney(self, n: int) -> int:
        result = 0
        current_week = 0
        
        for day in range(1, n+1):
            if(day - 1) % 7 == 0:
                current_week += 1
            result += current_week + (day - 1) % 7
        return result