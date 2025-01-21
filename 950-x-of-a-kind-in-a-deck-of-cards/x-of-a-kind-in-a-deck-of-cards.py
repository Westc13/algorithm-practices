class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        count = Counter(deck)
        freq = list(count.values())
        group_size = reduce(gcd, freq)

        return group_size > 1