class Solution:
    def getLucky(self, s: str, k: int) -> int:
        n_arr = [str(ord(char) - ord('a') + 1) for char in s]
        for _ in range(k):
            num = int(''.join(n_arr))
            n_arr = [char for char in str(sum(int(x) for x in str(num)))] 
        return int(''.join(n_arr))