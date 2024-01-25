class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        result = 0
        sorted_cost = sorted(cost)[::-1]

        sorted_cost = [c for i, c in enumerate(sorted_cost) if i % 3 != 2]
        result = sum(sorted_cost)
        return result

        # first, second, third = 0, 1, 2
        # if len(sorted_cost) < 3:
        #     result = sum(cost)
        # else:
        #     while third <= len(sorted_cost):
        #         result += sorted_cost[first] + sorted_cost[second]
        #         first += 3
        #         second += 3
        #         third += 3
        # return result