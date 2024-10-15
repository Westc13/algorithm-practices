class Solution:
    def checkRecord(self, s: str) -> bool:
        absent_count = 0
        late_consecutive = 0
        
        for i in range(len(s)):
            if s[i] == 'A':
                absent_count += 1
        for i in range(0, len(s) - 2):
            if s[i] == 'L' and s[i + 1] == 'L' and s[i + 2] == 'L':
                late_consecutive += 1

        if absent_count >= 2:
            return False
        if late_consecutive > 0:
            return False
        return True