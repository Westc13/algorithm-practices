class Solution(object):
    def sortPeople(self, names, heights):
        result = zip(heights, names)
        sorted_result = sorted(result, key= lambda a: (-a[0], a[1]))
        sorted_names = [name for height, name in sorted_result]
        return sorted_names
        

        """
        :type names: List[str]
        :type heights: List[int]
        :rtype: List[str]
        """