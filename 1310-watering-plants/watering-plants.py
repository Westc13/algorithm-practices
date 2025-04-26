class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        steps = 0
        water = capacity
        for i in range(len(plants)):
            steps += 1
            if water >= plants[i]:
                water -= plants[i]
            else:
                steps += (i * 2)
                water = capacity - plants[i]
        return steps