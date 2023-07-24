class Solution:
    def maximum69Number (self, num: int) -> int:
        possible_nums=[num]
        digit_arr = [int(x) for x in str(num)]
        for i in range(len(digit_arr)):
            temp_arr = digit_arr[:]
            if temp_arr[i] == 6:
                temp_arr[i] = 9
            else:
                temp_arr[i] = 6
            possible_nums.append(int(''.join(map(str, temp_arr))))
        return max(possible_nums)