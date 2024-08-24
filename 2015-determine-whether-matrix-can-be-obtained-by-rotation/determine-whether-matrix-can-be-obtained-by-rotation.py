class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        def rotate90(mat):
            mat = [list(row) for row in zip(*mat)]
            for row in mat:
                row.reverse()
            return mat
        if mat == target:
            return True
        for _ in range(3):
            mat = rotate90(mat)
            if mat == target:
                return True
        return False