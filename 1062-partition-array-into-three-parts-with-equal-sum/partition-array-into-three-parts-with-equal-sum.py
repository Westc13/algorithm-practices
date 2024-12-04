class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
        total_sum = sum(arr)

        if total_sum % 3 != 0:
            return False
        
        target_sum = total_sum // 3
        running_sum = 0
        partition_count = 0

        for num in arr:
            running_sum += num

            if running_sum == target_sum:
                partition_count += 1
                running_sum = 0

                if partition_count == 3:
                    return True
        return False