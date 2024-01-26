class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        alice_total = sum(aliceSizes)
        bob_total = sum(bobSizes)
        diff = (alice_total - bob_total) // 2
        set_bob = set(bobSizes)

        for alice_candy in aliceSizes:
            if alice_candy - diff in set_bob:
                return [alice_candy, alice_candy - diff]
