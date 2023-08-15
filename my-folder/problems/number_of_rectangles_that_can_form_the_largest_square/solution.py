class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        result = 0
        largest_possibles = []
        for rectangle in rectangles:
            if (rectangle[0] < rectangle[1]):
                largest_possibles.append(rectangle[0])
            else:
                largest_possibles.append(rectangle[1])
        for i in range(len(largest_possibles)):
            if largest_possibles[i] >= max(largest_possibles):
                result +=1
        return result
        