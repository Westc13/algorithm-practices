class Solution:
    def maximumXOR(self, nums: List[int]) -> int:
        basis = [0] * 32
    
        for num in nums:
            for i in reversed(range(32)):
                if (num >> i) & 1:
                    if basis[i] == 0:
                        basis[i] = num
                        break
                    num ^= basis[i]
        
        result = 0
        for i in reversed(range(32)):
            if (result ^ basis[i]) > result:
                result ^= basis[i]
        
        return result