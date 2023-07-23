class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        highest = 0
        progress = [0]
        for stop in gain:
            highest += stop
            progress.append(highest)
        return max(progress)