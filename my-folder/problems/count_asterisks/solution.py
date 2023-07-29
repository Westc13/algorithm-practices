class Solution:
    def countAsterisks(self, s: str) -> int:
        # slice the all the || off the s
        # count the *
        count = 0
        within_pair = False
        for char in s:
            if char == '|':
                within_pair = not within_pair
            elif char == '*' and not within_pair:
                count += 1
        return count