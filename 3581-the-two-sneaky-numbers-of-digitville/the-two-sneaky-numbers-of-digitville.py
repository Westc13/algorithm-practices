class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        # nums_count = Counter(nums)
        # result = []
        # for num, freq in nums_count.items():
        #     if freq == 2:
        #         result.append(num)
        # return result

        nums_count = Counter(nums)
        return [num for num, freq in nums_count.items() if freq == 2]