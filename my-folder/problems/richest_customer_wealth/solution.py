class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        money = 0
        for account in accounts:
            total = sum(account)
            if total > money:
                money = total
        return money
