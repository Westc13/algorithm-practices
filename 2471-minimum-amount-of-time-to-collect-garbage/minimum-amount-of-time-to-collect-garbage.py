class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        n = len(garbage)

        total_pickup_time = sum(len(house) for house in garbage)

        last_position = {'M': 0, 'P': 0, 'G': 0}

        for i in range(n):
            for g in garbage[i]:
                last_position[g] = i

        total_travel_time = 0
        for g in 'MPG':
            last_house = last_position[g]
            if last_house > 0:
                total_travel_time += sum(travel[: last_house])
        
        return total_pickup_time + total_travel_time