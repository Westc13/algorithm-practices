class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        num_str = str(num)
        i = len(num_str) - 1
        while i > 0:        
            if num_str[i] == '0':
                num_str = num_str[:i]
            else:
                break
            i -= 1
        return num_str