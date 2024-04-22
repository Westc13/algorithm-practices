class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        total_sec = 0
        for i in range(len(timeSeries) - 1):
            total_sec += min((timeSeries[i+1] - timeSeries[i]), duration)
        return total_sec + duration