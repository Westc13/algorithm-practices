class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        n = len(colors)
        if n < 3:
            return 0
        
        count = 0

        for i in range(n):
            left = colors[i]
            middle = colors[(i + 1)% n]
            right = colors[(i + 2)% n]

            if left == right and left != middle:
                count += 1
        return count
