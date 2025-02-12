class Solution:
    def hasMatch(self, s: str, p: str) -> bool:
        prefix, suffix = p.split('*')
        prefix_index = s.find(prefix)
        if prefix_index == -1:
            return False
        return suffix in s[prefix_index + len(prefix):]