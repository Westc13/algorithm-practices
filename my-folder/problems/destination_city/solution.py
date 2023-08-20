class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        starters = [path[0] for path in paths]
        enders = [path[1] for path in paths]
        for ender in enders:
            if ender not in starters:
                return ender
