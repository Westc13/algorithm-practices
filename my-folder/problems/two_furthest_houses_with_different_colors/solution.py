class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        max_distance = 0
        n = len(colors)

        for i in range(n):
            distance_to_first = i if (colors[i] != colors[0]) else 0
            distance_to_last = n-1-i if (colors[i] != colors[n-1]) else 0
            max_distance = max(max_distance, distance_to_last, distance_to_first)
        return max_distance

        # max_distance = 0
        # n = len(colors)
        # for i in range(n):
        #     for j in range(i+1, n):
        #         if colors[i] != colors[j]:
        #             max_distance = max(max_distance, abs(i - j))
        # return max_distance