class Solution:
    def checkString(self, s: str) -> bool:
        has_been_b = False
    
        for char in s:
            if char == 'b':
                has_been_b = True
            elif char == 'a' and has_been_b:
                return False
        
        return True
