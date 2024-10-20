class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        freq = {}
        count = 0

        for domino in dominoes:
            key = tuple(sorted(domino))

            if key in freq:
                count += freq[key]
                freq[key] += 1
            else:
                freq[key] = 1
        return count
        