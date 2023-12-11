class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) > 1:
            stones.sort()
            x, y = stones[-2], stones[-1]

            if x == y:
                stones.pop()
                stones.pop()
            else:
                stones.pop()
                stones.pop()
                stones.append(y-x)
            
        if len(stones) == 0:
            return 0
        else:
            return stones[0]