class Solution:
    def countLargestGroup(self, n: int) -> int:
        def digit_sum(num):
            return sum(map(int, str(num)))
        group_counts = {}

        for i in range(1, n + 1):
            sum_of_digits = digit_sum(i)
            group_counts[sum_of_digits] = group_counts.get(sum_of_digits, 0) + 1
        
        max_count = max(group_counts.values())

        result = sum( 1 for count in group_counts.values() if count == max_count)

        return result