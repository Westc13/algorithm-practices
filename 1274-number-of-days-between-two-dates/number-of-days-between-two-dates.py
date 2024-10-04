class Solution:
    def daysBetweenDates(self, date1: str, date2: str) -> int:
        date1 = datetime.datetime.strptime(date1, "%Y-%m-%d")
        date2 = datetime.datetime.strptime(date2, "%Y-%m-%d")
        delta = abs(date2 - date1)

        return delta.days

        return abs((d2 - d1).days)