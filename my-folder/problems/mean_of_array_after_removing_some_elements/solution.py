class Solution:
    def trimMean(self, arr: List[int]) -> float:
        num_elements_to_remove = int(len(arr) * 0.05)
        arr.sort()
        trimmed_arr = arr[num_elements_to_remove:-num_elements_to_remove]

        mean = sum(trimmed_arr) / len(trimmed_arr)
        return mean