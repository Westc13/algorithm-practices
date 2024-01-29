class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        n = len(nums)
        count = 0

        for indices in combinations(range(n), 4):
            a, b, c, d = indices

            if nums[a] + nums[b] + nums[c] == nums[d]:
                count += 1
        return count        