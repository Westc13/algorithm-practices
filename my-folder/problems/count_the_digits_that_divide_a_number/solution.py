class Solution:
    def countDigits(self, num: int) -> int:
        count = 0
        #step 1, turn the num into an array of its digits
        #step 2, loop through the array elements, divide num by each of the array alement
        #step 3, if num%digit == 0, count +1

        digit_arr = [int(x) for x in str(num)]
        for i in digit_arr:
            if num % i ==0:
                count +=1
        return count
