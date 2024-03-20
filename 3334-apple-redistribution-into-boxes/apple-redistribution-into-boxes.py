class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        total_a = sum(apple)
        total_c = sum(capacity)
        count = 0
        if total_a >= total_c:
            return len(capacity)
        else:
            while total_a > 0:
                capacity.sort()
                total_a -= capacity[-1]
                capacity.pop()
                count += 1
            return count