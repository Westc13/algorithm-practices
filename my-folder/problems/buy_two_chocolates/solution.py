class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        sorted_prices = sorted(prices)
        min_sum_of_two = sorted_prices[0] + sorted_prices[1]
        if min_sum_of_two > money:
            return money
        else:
            return money - min_sum_of_two