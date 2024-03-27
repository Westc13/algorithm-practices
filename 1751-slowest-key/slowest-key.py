class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        longest_time = releaseTimes[0]
        slowest_key = keysPressed[0]
        for i in range(1, len(releaseTimes)):
            current_time = releaseTimes[i] - releaseTimes[i-1]
            if current_time > longest_time:
                longest_time = current_time
                slowest_key = keysPressed[i]
            elif current_time == longest_time:
                slowest_key = max(slowest_key, keysPressed[i])
        return slowest_key