class Solution:
    def partitionString(self, s: str) -> int:
        seen = set()
        count = 0

        for ch in s:
            if ch in seen:
                count += 1
                seen.clear()
            seen.add(ch)
        return count + 1