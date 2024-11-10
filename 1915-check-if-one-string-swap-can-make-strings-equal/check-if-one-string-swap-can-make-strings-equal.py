class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        if s1 == s2:
            return True
        
        mismatch_indices = [i for i in range(len(s1)) if s1[i] != s2[i]]

        if len(mismatch_indices) == 2:
            i, j = mismatch_indices
            return s1[i] == s2[j] and s1[j] == s2[i]
        return False