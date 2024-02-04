class Solution:
    def maxPower(self, s: str) -> int:
        power = 1
        current_power = 1
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                current_power += 1
            else:
                current_power = 1
            power = max(power, current_power)
        return power