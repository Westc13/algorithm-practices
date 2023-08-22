class Solution:
    def sortString(self, s: str) -> str:

        char_freq = [0] * 26
        for char in s:
            char_freq[ord(char) - ord('a')] += 1
    
        result = []
        remaining = len(s)

        while remaining > 0:
            for i in range(26):
                if char_freq[i] > 0:
                    result.append(chr(ord('a') + i))
                    char_freq[i] -= 1
                    remaining -= 1
            
            for i in range(25, -1, -1):
                if char_freq[i] > 0:
                    result.append(chr(ord('a') + i))
                    char_freq[i] -= 1
                    remaining -= 1

        return ''.join(result)