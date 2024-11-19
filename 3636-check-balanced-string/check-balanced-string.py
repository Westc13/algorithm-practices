class Solution:
    def isBalanced(self, num: str) -> bool:
        num_arr = [int(n) for n in num]
        sum_even = sum(num_arr[i] for i in range(len(num_arr)) if i % 2 == 0)
        sum_odd = sum(num_arr) - sum_even
        return sum_even == sum_odd