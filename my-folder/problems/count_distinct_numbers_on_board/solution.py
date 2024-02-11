class Solution:
    def distinctIntegers(self, n: int) -> int:
        result = [n]
        for el in result:
            for num in range(1, n):
                if el % num == 1 and num not in result:
                    result.append(num)
        return len(result)
        