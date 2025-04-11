class Solution:
    def punishmentNumber(self, n: int) -> int:
        def can_partition(s, target):

            if not s:
                return target == 0

            
            for i in range(1, len(s) + 1):
                num = int(s[:i])
                
                if can_partition(s[i:], target - num):
                    return True

            return False

        total = 0
        for i in range(1, n + 1):
            square = i * i
            if can_partition(str(square), i):
                total += square

        return total