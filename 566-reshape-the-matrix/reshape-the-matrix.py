class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        m, n = len(mat), len(mat[0])
        total_elements = m * n

        if total_elements != r * c:
            return mat
        
        flat_list = [elem for row in mat for elem in row]

        reshaped_matrix = []
        for i in range(r):
            reshaped_matrix.append(flat_list[i*c:(i+1)*c])
        return reshaped_matrix