class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        being_trusted = [0] * (n + 1)
        trust_others = [0] * (n + 1)

        for el in trust:
            trust_others[el[0]] += 1
            being_trusted[el[1]] += 1
        
        for person in range(1, n+1):
            if being_trusted[person] == n - 1 and trust_others[person] == 0:
                return person
        return -1