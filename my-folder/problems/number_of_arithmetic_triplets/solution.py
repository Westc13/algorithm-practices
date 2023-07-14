class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        triplet_count = 0
        num_count = {}
        triplet_ending = {}

        for num in nums:
            prev_num = num - diff
            if prev_num in triplet_ending:
                triplet_count += triplet_ending[prev_num]
            
            if prev_num in num_count:
                if num in triplet_ending:
                    triplet_ending[num] += num_count[prev_num]
                else:
                    triplet_ending[num] = num_count[prev_num]
            num_count[num] = num_count.get(num, 0) + 1
        return triplet_count
        
       

        # triplet_count = 0
        # n = len(nums)

        # for i in range(n - 2):
        #     for j in range(i + 1, n - 1):
        #         for k in range(j + 1, n):
        #             if nums[j] - nums[i] == diff and nums[k] - nums[j] == diff:
        #                 triplet_count += 1
        # return triplet_count