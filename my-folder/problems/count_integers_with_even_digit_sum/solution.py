class Solution:
    def countEven(self, num: int) -> int:
        result = []
        for el in range(1, num+1):
            el_digits = [int(d) for d in str(el)]
            if sum(el_digits) % 2 == 0:
                result.append(el)
        return len(result)
        