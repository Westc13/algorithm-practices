class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        if month < 3:
            month += 12
            year -= 1
        K = year % 100
        J = year // 100
        h = (day + (13 * (month + 1)) // 5 + K + K // 4 + J // 4 + 5 * J) % 7

        days_of_week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        return days_of_week[h]