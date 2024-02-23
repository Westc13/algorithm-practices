class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        all_substs = [str(num)[i:j] for i in range(len(str(num)))
                        for j in range(i+1, len(str(num))+ 1)]
        len_k_substs = [int(x) for x in all_substs if len(x) == k]
        result = 0
        for el in len_k_substs:
            if el == 0:
                continue
            elif num % el == 0:
                result += 1
        return result