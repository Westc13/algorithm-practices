class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        # covered = [False] * 51

        # for start, end in ranges:
        #     for i in range(start, end + 1):
        #         covered[i] = True
        # for i in range(left, right + 1):
        #     if not covered[i]:
        #         return False
        # return True

        needed = set(range(left, right + 1))

        for start, end in ranges:
            for i in range(max(start, left), min(end, right) + 1):
                if i in needed:
                    needed.remove(i)
        return len(needed) == 0