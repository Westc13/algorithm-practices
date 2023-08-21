class Solution:
    def sumZero(self, n: int) -> List[int]:
        pos_ints = random.sample(range(1, int(n/2) + 1),int(n/2))
        neg_ints = [-x for x in pos_ints]
        result = pos_ints + neg_ints
        if n % 2 != 0:
            result.append(0)
        return result
            
        