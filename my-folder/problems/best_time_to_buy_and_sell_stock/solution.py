class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0

        min_price = prices[0]
        max_profit = 0

        for price in prices[1:]:
        # Update the minimum price encountered so far
            min_price = min(min_price, price)
        # Update the maximum profit that can be obtained
            max_profit = max(max_profit, price - min_price)

        return max_profit


        # left = 0
        # right = 1
        # biggest_diff = 0
        # while right in range(len(prices)):
        #     if prices[left] < prices[right]:
        #         biggest_diff = max(prices[right] - prices[left], biggest_diff)         
        #     else:
        #         left = right
        #     right +=1
        # return biggest_diff
        
