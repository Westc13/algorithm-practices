class Solution:
    def sumOfMultiples(self, n: int) -> int:
        n_list = []
        sum = 0
        for i in range(n+1):
            n_list.append(i+1)
            if i%3 == 0 or i%5 == 0 or i%7 == 0:
                sum +=i

        return sum

            