class Solution:
    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        def time_to_minutes(time: str) -> int:
            hours, minutes = map(int, time.split(':'))
            return hours * 60 + minutes
        start1, end1 = time_to_minutes(event1[0]), time_to_minutes(event1[1])
        start2, end2 = time_to_minutes(event2[0]), time_to_minutes(event2[1])

        return not (end1 < start2 or end2 < start1)