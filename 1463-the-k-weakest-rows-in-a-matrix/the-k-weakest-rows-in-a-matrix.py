class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        soldier_count = [(sum(row), idx) for idx, row in enumerate(mat)]

        soldier_count.sort()

        weakest_rows = [idx for count,  idx in soldier_count[:k]]

        return weakest_rows