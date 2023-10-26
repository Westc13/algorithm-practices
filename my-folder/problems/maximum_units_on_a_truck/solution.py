class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        result = 0
        boxTypes.sort(key=lambda x: x[1], reverse=True)

        for box in boxTypes:
            if truckSize >= box[0]:
                result += box[0] * box[1]
                truckSize -= box[0]
            else:
                result += truckSize * box[1]
                break
        return result
        
        

        