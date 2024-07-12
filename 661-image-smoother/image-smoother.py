class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        m, n = len(img), len(img[0])
        result =[[0]*n for _ in range(m)]

        for i in range(m):
            for j in range(n):
                total, count = 0, 0
                for x in range(max(0, i-1), min(i+2, m)):
                    for y in range(max(0, j-1), min(j+2, n)):
                        total += img[x][y]
                        count += 1
                result[i][j] = math.floor(total / count)
        return result