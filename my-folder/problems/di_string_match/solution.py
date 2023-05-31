class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        result = []
        I = 0
        D = len(s)
        for char in s:
            if char == 'I':
                result.append(I)
                I += 1
            elif char == 'D':
                result.append(D)
                D -= 1
        # Append the remaining element (either I or D)
        result.append(I)
        return result

            