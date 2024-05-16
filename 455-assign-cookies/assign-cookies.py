class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        count = 0
        child_index = 0
        for cooking in s:
            if child_index < len(g) and cooking >= g[child_index]:
                count += 1
                child_index += 1
        return count