class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s_arr = s.rstrip().split(' ')
        return len(s_arr[-1])
        

        