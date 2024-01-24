class Solution:
    def kItemsWithMaximumSum(self, numOnes: int, numZeros: int, numNegOnes: int, k: int) -> int:
        result = 0
        total = numOnes + numZeros + numNegOnes
        if k >= total:
            result = numOnes - numNegOnes
        else:
            if k <= numOnes:
                result = k
            elif k > numOnes and k <= (numOnes + numZeros):
                result = numOnes
            elif k > (numOnes + numZeros) and k < total:
                result = numOnes - (k - (numOnes + numZeros))
        return result
        