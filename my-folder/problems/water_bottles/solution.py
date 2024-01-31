class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        totalBottles = numBottles
        emptyBottles = numBottles

        while emptyBottles >= numExchange:
            newBottles = emptyBottles // numExchange
            remainingEmpty = emptyBottles % numExchange
            totalBottles += newBottles
            emptyBottles = newBottles + remainingEmpty
        return totalBottles