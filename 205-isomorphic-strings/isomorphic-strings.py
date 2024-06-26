class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        mapping_s = {}
        mapping_t = {}
        for char_s, char_t in zip(s,t):
            if char_s in mapping_s:
                if mapping_s[char_s] != char_t:
                    return False
            else:
                mapping_s[char_s] = char_t
            
            if char_t in mapping_t:
                if mapping_t[char_t] != char_s:
                    return False
            else:
                mapping_t[char_t] = char_s
        return True