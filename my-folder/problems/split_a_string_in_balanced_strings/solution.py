class Solution:
    def balancedStringSplit(self, s: str) -> int:
        count = 0
        R_counter, L_counter = 0, 0
        for i in range(len(s)):
            if s[i] == "R":
                R_counter += 1
            else:
                L_counter += 1
            if R_counter == L_counter:
                count += 1
                R_counter, L_counter = 0, 0
        return count
