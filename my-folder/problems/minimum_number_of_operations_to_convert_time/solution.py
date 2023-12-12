class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        h1, m1 = map(int, current.split(':'))
        h2, m2 = map(int, correct.split(':'))
        time_difference_in_min = (h2 - h1) * 60 + (m2 - m1)
        allowed_changes = [60, 15, 5, 1]

        operations = 0
        for change in allowed_changes:
            operations += time_difference_in_min // change
            time_difference_in_min %= change
        return operations