class Solution:
    def minDeletion(self, s: str, k: int) -> int:
        freq = Counter(s)

        if len(freq) <= k:
            return 0
        
        frequencies = sorted(freq.values())
        deletions_needed = len(freq) - k

        return sum(frequencies[:deletions_needed])