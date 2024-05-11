class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        bank = {5:0, 10:0}
        for bill in bills:
            if bill == 5:
                bank[5] += 1
            elif bill == 10:
                if bank[5] == 0:
                    return False
                else:
                    bank[5] -= 1
                    bank[10] += 1
            else:
                if bank[10] > 0 and bank[5] > 0:
                    bank[10] -= 1
                    bank[5] -= 1
                elif bank[5] >= 3:
                    bank[5] -= 3
                else:
                    return False
        return True
