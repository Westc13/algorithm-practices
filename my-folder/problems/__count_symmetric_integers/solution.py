class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        all_ints = [*range(low, high+1)]
        all_2n_ints = [i for i in all_ints if len(str(i)) % 2 == 0]
        count = 0
        for element in all_2n_ints:
            int_str = str(element)
            first_half = int_str[0:len(int_str)//2]
            second_half = int_str[len(int_str)//2:]
            first_half = [int(i) for i in first_half]
            second_half = [int(i) for i in second_half]
            
            if sum(first_half) == sum(second_half):
                count +=1
        return count       
        