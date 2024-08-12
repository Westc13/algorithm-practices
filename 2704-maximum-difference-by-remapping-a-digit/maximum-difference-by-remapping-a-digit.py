class Solution:
    def minMaxDifference(self, num: int) -> int:
        num_str = str(num)
        max_num_str = num_str
        for digit in num_str:
            if digit != '9':
                max_num_str = num_str.replace(digit, '9')
                break
        max_num = int(max_num_str)

        min_num_str = num_str
        first_digit = num_str[0]

        if first_digit != '0':
            min_num_str = num_str.replace(first_digit, '0')
        # else:
        #     for digit in num_str[1:]:
        #         if digit != '1' and digit != '0':
        #             min_num_str = num_str.replace(digit, '0')
        min_num = int(min_num_str)

        return max_num - min_num