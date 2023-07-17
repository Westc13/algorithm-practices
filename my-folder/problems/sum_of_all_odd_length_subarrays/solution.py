class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        total_sum = 0
        n = len(arr)

        for i in range(n):
            total_sum += ((i + 1) * (n - i) + 1) // 2 * arr[i]
        return total_sum

        # for length in range(1, n + 1, 2):
        #     for start in range(n - length + 1):
        #         end = start + length - 1
        #         total_sum +=sum(arr[start:end+1])
        # return total_sum
        
        