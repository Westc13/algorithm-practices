class Solution:
    def numberOfMatches(self, n: int) -> int:
        return n - 1


        # total_matches = 0
        # while n > 1:
        #     total_matches += n//2
        #     n = n//2 + n%2
        # return total_matches

        # while n > 1:
        #     if n%2 != 0:
        #         total_matches += (n - 1)//2 + 1
        #         n = (n - 1)//2
        #     else:
        #         total_matches += (n - 1)//2 + 1
        #         n = n//2
        # return total_matches