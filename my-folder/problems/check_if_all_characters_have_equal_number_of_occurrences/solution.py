class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        char_freq = {}
        result = []
        for char in s:
            if char in char_freq:
                char_freq[char] += 1
            else:
                char_freq[char] = 1
        for element in char_freq:
            result.append(char_freq[element])
        if len(set(result)) > 1:
            return False
        return True
            
        
            
            
        