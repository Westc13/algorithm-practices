class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        s_conc = s + s
        if goal in s_conc:
            return True
        return False