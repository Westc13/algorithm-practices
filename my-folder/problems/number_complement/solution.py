class Solution:
    def findComplement(self, num: int) -> int:
        num_bin = [digit for digit in str(bin(num)[2:])]
        rev_num_bin = []
        for el in num_bin:
            if el == '1':
                rev_num_bin.append('0')
            if el == '0':
                rev_num_bin.append('1')
        complement_bin = ''.join(rev_num_bin)
        return int(complement_bin, 2)
        
        
         
        
        