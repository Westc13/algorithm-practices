class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        weight_dict = {}

        for value, weight in items1:
            if value in weight_dict:
                weight_dict[value] += weight
            else:
                weight_dict[value] = weight
        
        for value, weight in items2:
            if value in weight_dict:
                weight_dict[value] += weight
            else:
                weight_dict[value] = weight
        
        return [[value, weight_dict[value]] for value in sorted(weight_dict.keys())]