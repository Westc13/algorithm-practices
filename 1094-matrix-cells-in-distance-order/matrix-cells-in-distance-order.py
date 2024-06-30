class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        coordinates = [(r, c) for r in range(rows) for c in range(cols)]

        distances = [(abs(r-rCenter) + abs(c-cCenter), (r,c)) for r, c in coordinates]
        distances.sort()

        sorted_coordinates = [coord for dist, coord in distances]

        return sorted_coordinates