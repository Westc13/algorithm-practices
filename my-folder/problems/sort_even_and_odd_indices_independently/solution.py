class Solution:
    def sortEvenOdd(self, nums: List[int]) -> List[int]:
        odd_indice = []
        even_indice = []
        for i in range(len(nums)):
            if i % 2 == 0:
                even_indice.append(nums[i])
            else:
                odd_indice.append(nums[i])
        odd_indice.sort(reverse=True)
        even_indice.sort()
        result = []
        for i in range(len(nums)):
            if i % 2 == 0:
                result.append(even_indice[i // 2])
            else:
                result.append(odd_indice[i // 2])
        return result