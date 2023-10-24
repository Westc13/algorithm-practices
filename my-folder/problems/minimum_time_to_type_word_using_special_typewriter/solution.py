class Solution:
    def minTimeToType(self, word: str) -> int:
        current_position = 0
        total_time = 0

        for char in word:
            target_position = ord(char) - ord('a')
            clockwise_distance = (target_position - current_position + 26) % 26
            counterclockwise_distance = (current_position - target_position + 26) % 26
            distance = min(clockwise_distance, counterclockwise_distance)
            current_position = target_position
            total_time += distance + 1
        return total_time
        