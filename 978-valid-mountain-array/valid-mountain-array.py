class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False
        peak = arr.index(max(arr))

        if peak == 0 or peak == len(arr) - 1:
            return False
        
        for i in range(peak):
            if arr[i] >= arr[i + 1]:
                return False
        for i in range(peak, len(arr) - 1):
            if arr[i] <= arr[i + 1]:
                return False
        return True