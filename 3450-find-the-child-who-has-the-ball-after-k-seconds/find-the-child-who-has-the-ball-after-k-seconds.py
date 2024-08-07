class Solution:
    def numberOfChild(self, n: int, k: int) -> int:
        k = k % (2 * (n - 1))
        position = 0
        direction = 1

        for _ in range(k):
            position += direction
            if position == n - 1 or position == 0:
                direction = - direction
        return position