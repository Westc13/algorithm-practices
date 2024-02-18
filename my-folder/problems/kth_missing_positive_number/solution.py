class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        missing_count = 0
        current_num = 1
        i = 0
        while missing_count < k:
            if i < len(arr) and arr[i] == current_num:
                i += 1
            else:
                missing_count += 1
            if missing_count < k:
                current_num += 1
        return current_num