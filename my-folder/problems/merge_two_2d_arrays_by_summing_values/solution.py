class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        combined_arr = nums1 + nums2
        result_dict = {}
        for id, value in combined_arr:
            if id not in result_dict:
                result_dict[id] = value
            else:
                result_dict[id] += value

        result = [[id, value] for id, value in result_dict.items()]
        result.sort(key=lambda x: x[0])
        return result