class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        def is_arithmetic(arr: List[int]) -> bool:
            arr.sort()
            diff = arr[1] - arr[0]
            return all(arr[i] - arr[i - 1] == diff for i in range(1, len(arr)))
        result = []
        for i in range(len(l)):
            subarray = nums[l[i]:r[i] + 1]
            result.append(is_arithmetic(subarray))
        return result