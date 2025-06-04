class Solution:
    def pathInZigZagTree(self, label: int) -> List[int]:
        path = []
        level = 0

        while (1 << level) <= label:
            level += 1
        while label >= 1:
            path.append(label)
            level -= 1

            level_start = 1 << level
            level_end = (1 << (level + 1)) - 1

            label = level_start + level_end - label

            label //= 2
        return path[::-1]