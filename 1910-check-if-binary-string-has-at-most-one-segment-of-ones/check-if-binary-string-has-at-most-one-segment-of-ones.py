class Solution:
    def checkOnesSegment(self, s: str) -> bool:
        segment_count = 0
        for i in range(len(s)):
            if s[i] == '1' and (i == 0 or s[i - 1] == '0'):
                segment_count += 1
                if segment_count > 1:
                    return False
        return True