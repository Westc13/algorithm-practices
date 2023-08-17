class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        all_nums = [x for x in range(left, right + 1, 1)]
        result = []
        for num in all_nums:
            if num <= 9:
                result.append(num)
            else:
                num_digits = [int(digit) for digit in str(num)]
                if 0 not in num_digits:
                    is_self_dividing = True
                    for digit in num_digits:
                        if num % digit != 0:
                            is_self_dividing = False
                            break
                    if is_self_dividing:
                        result.append(num)
        return result