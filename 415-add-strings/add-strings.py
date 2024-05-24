class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        num1 = num1[::-1]
        num2 = num2[::-1]

        carry = 0
        result = []

        for i in range(max(len(num1), len(num2))):
            digit1 = int(num1[i]) if i < len(num1) else 0
            digit2 = int(num2[i]) if i < len(num2) else 0

            total = digit1 + digit2 + carry
            carry = total // 10
            result.append(str(total % 10))
        
        if carry:
            result.append(str(carry))
        
        return ''.join((result[::-1]))