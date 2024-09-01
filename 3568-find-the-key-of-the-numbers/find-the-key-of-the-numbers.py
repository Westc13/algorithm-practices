class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        num1 = f"{num1:04d}"
        num2 = f"{num2:04d}"
        num3 = f"{num3:04d}"

        key_digits = []

        for i in range(4):
            min_digit = min(num1[i], num2[i], num3[i])
            key_digits.append(min_digit)
        
        key = ''.join(key_digits)

        key = int(key)

        return key