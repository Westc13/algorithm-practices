class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        device_counts = [row.count('1') for row in bank if '1' in row]
        total_beams = 0
        for i in range(len(device_counts) - 1):
            total_beams += device_counts[i] * device_counts[i + 1]
        return total_beams