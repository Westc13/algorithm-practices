class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        sets = [set(num) for num in nums]
        common_set = reduce(set.intersection, sets)
        return sorted(list(common_set))

        
        # flat_list = []
        # result = []
        # for num in nums:
        #     for el in num:
        #         if el in num:
        #             flat_list.append(el)
        # el_count = {**Counter(flat_list)}
        # for el, count in el_count.items():
        #     if count == len(nums):
        #         result.append(el)
        # return sorted(result)
        