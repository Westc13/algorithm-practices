class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:
        days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        def date_to_day_of_year(date):
            month, day = map(int, date.split('-'))
            return sum(days_in_month[:month - 1]) + day
        start_alice = date_to_day_of_year(arriveAlice)
        end_alice = date_to_day_of_year(leaveAlice)
        start_bob = date_to_day_of_year(arriveBob)
        end_bob = date_to_day_of_year(leaveBob)
        overlap_start = max(start_alice, start_bob)
        overlap_end = min(end_alice, end_bob)

        if overlap_end >= overlap_start:
            return overlap_end - overlap_start + 1
        else:
            return 0