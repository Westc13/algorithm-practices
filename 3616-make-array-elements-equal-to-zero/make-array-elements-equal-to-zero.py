class Solution:
    def countValidSelections(self, nums: List[int]) -> int:
        def simulate(start, direction):
            temp_nums = nums[:]
            curr = start
            n = len(temp_nums)

            while 0 <= curr < n:
                if temp_nums[curr] == 0:
                    curr += direction
                else:
                    temp_nums[curr] -= 1
                    direction = -direction
                    curr += direction
            return all(x == 0 for x in temp_nums)
        valid_positions = [i for i, x in enumerate(nums) if x == 0]
        valid_count = 0

        for pos in valid_positions:
            if simulate(pos, 1):
                valid_count += 1
            if simulate(pos, -1):
                valid_count += 1
        return valid_count