class Solution:
    def arraySign(self, nums: List[int]) -> int:
        def signFunc(product):
            result = 1
            for num in nums:
                result *= num
            if result > 0:
                return 1
            elif result < 0:
                return -1
            else:
                return 0
        return signFunc(product)