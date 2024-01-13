class Solution:
    def minSteps(self, s: str, t: str) -> int:
        s_counter = Counter(s)
        t_counter = Counter(t)
        steps = 0
        for char, count in s_counter.items():
            if char not in t_counter:
                steps += count
            else:
                steps += max(0, count - t_counter[char])
        return steps