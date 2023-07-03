class Solution:
    def minimumSum(self, num: int) -> int:
        num_str = str(num)
        digits = list(num_str)
        permutations_list = permutations(digits)
        min_sum = float('inf')

        for perm in permutations_list:
            part1 = int("".join(perm[:len(perm)//2]))
            part2 = int("".join(perm[len(perm)//2:]))
            min_sum = min(min_sum, part1 + part2)
        
        return min_sum