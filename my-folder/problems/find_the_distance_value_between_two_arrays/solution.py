class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        result = 0
        for num in arr1:
            distances = []
            for el in arr2:
                distance = abs(num - el)
                distances.append(distance)
            meet_condition = not any(map(lambda x: x <= d, distances))
            if meet_condition == True:
                result += 1
        return result

