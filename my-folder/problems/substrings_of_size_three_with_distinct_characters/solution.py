class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        result_strs = []
        count = 0
        for i in range(len(s)-2):
            result_strs.append(s[i:i+3:1])
        for element in result_strs:
            if len(set(element)) == len(element):
                count +=1
        return count

        