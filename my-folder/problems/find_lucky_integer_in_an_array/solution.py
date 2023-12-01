class Solution:
    def findLucky(self, arr: List[int]) -> int:
        result = []
        el_freq = Counter(arr)
        for element, frequency in el_freq.items():
            if {element} == {frequency}:
                result.append(element)
        if result:
            return max(result)
        else:
            return -1