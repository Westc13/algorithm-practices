class Solution:
    def minSwaps(self, s: str) -> int:
        balance = 0
        max_imbalance = 0

        for ch in s:
            if ch == '[':
                balance += 1
            else:
                balance -= 1
                if balance < 0:
                    max_imbalance = max(max_imbalance, - balance)
        return (max_imbalance + 1) // 2