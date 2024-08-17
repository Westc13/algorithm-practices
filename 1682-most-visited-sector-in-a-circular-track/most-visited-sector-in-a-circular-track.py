class Solution:
    def mostVisited(self, n: int, rounds: List[int]) -> List[int]:
        counter = [0] * n
        start, end = rounds[0], rounds[-1]

        if start <= end:
            for i in range(start, end + 1):
                counter[i - 1] += 1
        else:
            for i in range(start, n + 1):
                counter[i - 1] += 1
            for i in range(1, end + 1):
                counter[i - 1] += 1
        max_count = max(counter)
        return [i + 1 for i, count in enumerate(counter) if count == max_count]