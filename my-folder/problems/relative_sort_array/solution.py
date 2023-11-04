class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        order_dict = {num: i for i, num in enumerate(arr2)}

        arr1.sort(key=lambda x: (order_dict.get(x, float('inf')), x))

        return arr1