class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        arr_freq = Counter(arr)
        total_freq = len(arr)
        for key, value in arr_freq.items():
            if (value/total_freq) * 100 > 25:
                return key