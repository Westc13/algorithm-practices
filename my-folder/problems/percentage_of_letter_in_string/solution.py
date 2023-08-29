class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        char_map = Counter(s)
        return(math.floor(char_map[letter] / len(s) * 100))
    
