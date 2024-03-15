class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prefix_products = [1] * n
        suffix_products = [1] * n
    
        for i in range(1, n):
            prefix_products[i] = prefix_products[i - 1] * nums[i - 1]
        
        for i in range(n - 2, -1, -1):
            suffix_products[i] = suffix_products[i + 1] * nums[i + 1]
        
        result = [prefix_products[i] * suffix_products[i] for i in range(n)]
        
        return result

        
        # n = len(nums)
        # result = []
        # for i in range(n):
        #     prefix_products = math.prod(nums[: i])
        #     suffix_products = math.prod(nums[i+1:])
        #     result.append(prefix_products * suffix_products)
        # return result