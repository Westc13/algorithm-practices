class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        count = 0
        remainder_count = {}
        for hour in hours:
            remainder = hour % 24
            complement = (24 - remainder) % 24
            if complement in remainder_count:
                count += remainder_count[complement]

            if remainder in remainder_count:
                remainder_count[remainder] += 1
            else:
                remainder_count[remainder] = 1
        return count