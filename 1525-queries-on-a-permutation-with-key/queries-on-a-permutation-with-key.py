class Solution:
    def processQueries(self, queries: List[int], m: int) -> List[int]:
        P = list(range(1, m + 1))
        result = []

        for q in queries:
            index = P.index(q)
            result.append(index)
            P.insert(0, P.pop(index))
        
        return result