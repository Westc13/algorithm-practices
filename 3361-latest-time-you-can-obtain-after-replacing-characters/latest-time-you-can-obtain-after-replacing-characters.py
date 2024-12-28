class Solution:
    def findLatestTime(self, s: str) -> str:
        time = list(s)
        if time[0] == '?':
            time[0] = '1' if time[1] == '?' or time[1] <= '1' else '0'
        if time[1] == '?':
            time[1] = '9' if time[0] == '0' else '1'
        if time[3] == '?':
            time[3] = '5'
        if time[4] == '?':
            time[4] = '9'
        return ''.join(time)