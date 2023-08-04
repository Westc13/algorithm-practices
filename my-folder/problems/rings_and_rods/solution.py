class Solution:
    def countPoints(self, rings: str) -> int:
        rods = {}
        for i in range(0, len(rings), 2):
            color = rings[i]
            rod = rings[i+1]

            rods.setdefault(rod, set())
            rods[rod].add(color)
            
            count = 0
            for rod_colors in rods.values():
                if {'B', 'G', 'R'}.issubset(rod_colors):
                    count +=1
        return count
            
        



        
            
        