class Solution:

    def areSimilar(self, mat: List[List[int]], k: int) -> bool:
        def left_shift(row):
            return row[1:] + [row[0]]
        def right_shift(row):
            return [row[-1]] + row[:-1]
        original_matrix = [row[:] for row in mat]

        for _ in range(k):
            for i in range(len(mat)):
                if i % 2 == 0:
                    mat[i] = left_shift(mat[i])
                else:
                    mat[i] = right_shift(mat[i])
        return mat == original_matrix
        