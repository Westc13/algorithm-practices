class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        arr = sorted(arr)
        diff = abs(arr[0] - arr[1])
        for i in range(0, len(arr)-1):
            if abs(arr[i] - arr[i+1]) == diff:
                result = True
                continue
            else:
                result = not result
                break
        return result
        