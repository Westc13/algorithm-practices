class Solution:
    def maxScore(self, s: str) -> int:
        # max_score = 0
        # for i in range(1, len(s)):
        #     left = s[:i]
        #     right = s[i:]
        #     score = left.count('0') + right.count('1')
        #     max_score = max(max_score, score)
        # return max_score

        total_ones = s.count('1')
        left_zeros = 0
        right_ones = total_ones
        max_score = 0
        for i in range(len(s) - 1):
            if s[i] == '0':
                left_zeros += 1
            else:
                right_ones -= 1
            max_score = max(max_score, left_zeros + right_ones)
        return max_score