class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        ans = []
        x_nums = nums[:n]
        y_nums = nums[n:]

        for i in range(n):
            ans.append(x_nums[i])
            ans.append(y_nums[i])

        return ans