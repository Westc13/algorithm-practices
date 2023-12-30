class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        decrypted_code = [0] * n

        for i in range(n):
            total_sum = 0

            if k > 0:
                for j in range(1, k + 1):
                    total_sum += code[(i + j) % n]
            elif k < 0:
                for j in range(k, 0):
                    total_sum += code[(i + j) % n]
            else:
                total_sum = 0

            decrypted_code[i] = total_sum

        return decrypted_code
