class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        arr_map = Counter(arr)
        freq = []
        for element in arr_map:
            freq.append(arr_map[element])
        if len(freq) == len(set(freq)):
            return True
        return False
            