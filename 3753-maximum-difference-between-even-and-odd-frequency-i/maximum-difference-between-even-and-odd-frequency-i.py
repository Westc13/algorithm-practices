class Solution:
    def maxDifference(self, s: str) -> int:
        freq = Counter(s)

        odd_freqs = [count for count in freq.values() if count % 2 != 0]
        even_freqs = [count for count in freq.values() if count % 2 == 0]
        if not odd_freqs or not even_freqs:
            return 0
        max_odd = max(odd_freqs)
        min_even = min(even_freqs)

        return max_odd - min_even