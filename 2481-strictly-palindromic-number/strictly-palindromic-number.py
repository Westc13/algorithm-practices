class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        def convert_to_base(n, base):
            digits = []
            while n > 0:
                digits.append(str(n % base))
                n //= base
            return ''.join(digits[::-1])
        
        def is_palindrome(s):
            return s == s[::-1]

        for base in range(2, n - 1):
            if not is_palindrome(convert_to_base(n, base)):
                return False
        return True