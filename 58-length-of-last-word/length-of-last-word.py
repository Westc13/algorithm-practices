class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        # s_new = s.rstrip()
        s_arr = s.rstrip().split(' ')
        return len(s_arr[-1])
        

        