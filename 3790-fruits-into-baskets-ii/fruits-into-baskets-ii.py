class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        unplaced = 0
        for fruit in fruits:
            placed = False
            for i in range(len(baskets)):
                if baskets[i] >= fruit:
                    baskets.pop(i)
                    placed = True
                    break
            if not placed:
                unplaced += 1
        return unplaced