class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        # num_as_int = int(''.join(map(str, num)))
        # result = num_as_int + k
        # return [int(digit) for digit in str(result)]
        result = []
        carry = k
        i = len(num) - 1

    
        while i >= 0 or carry > 0:
            if i >= 0:
                carry += num[i]
            result.append(carry % 10)
            carry //= 10
            i -= 1

        
        return result[::-1]