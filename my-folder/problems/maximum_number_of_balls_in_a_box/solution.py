class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        box_counts = {}
        
        for ball_number in range(lowLimit, highLimit + 1):
            ball_sum = sum(int(digit) for digit in str(ball_number))

            if ball_sum in box_counts:
                box_counts[ball_sum] += 1
            else:
                box_counts[ball_sum] = 1
        return max(box_counts.values())