class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        output = set()

        all_permutations = permutations(digits, 3)

        for perm in all_permutations:
            if perm[0] != 0 and (perm[0] * 100 + perm[1] * 10 + perm[2]) % 2 == 0:
                output.add(perm[0] * 100 + perm[1] * 10 + perm[2])
        return sorted(list(output))
        