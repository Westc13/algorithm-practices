class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        L = int(math.sqrt(area))
        while area % L != 0:
            L -=1
        W = area // L

        return [max(L, W), min(L, W)]