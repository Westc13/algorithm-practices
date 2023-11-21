class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        candy_type_set = set(candyType)
        result = int(len(candyType) / 2)
        if len(candy_type_set) > int(len(candyType) / 2):
            return result
        else:
            return len(candy_type_set)