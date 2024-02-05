class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        rank_count = Counter(ranks)
        suit_count = Counter(suits)
        
        for count in suit_count.values():
            if count >= 5:
                return 'Flush'
        
        for count in rank_count.values():
            if count >= 3:
                return 'Three of a Kind'
        for count in rank_count.values():
            if count == 2:
                return 'Pair'
        
        return 'High Card'