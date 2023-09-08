class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        sorted_arr = sorted(arr)
        result = []
        min_diff = float('inf')
        for i in range(len(sorted_arr)-1):
            current_diff = abs(sorted_arr[i] - sorted_arr[i+1])
            if  current_diff < min_diff:
                min_diff = current_diff
                result= [[sorted_arr[i], sorted_arr[i+1]]]
            elif current_diff == min_diff:
                result.append([sorted_arr[i], sorted_arr[i+1]])
        return result
            
