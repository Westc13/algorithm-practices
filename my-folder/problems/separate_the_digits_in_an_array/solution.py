class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        result = []
        for num in nums:
            if len(str(num)) > 1:
                new_num = [int(x) for x in str(num)]
                for i in range(len(new_num)):
                    result.append(new_num[i])
            else:
                result.append(num)
        return result