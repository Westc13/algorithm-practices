class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        rev_num = int(str(num)[::-1])
        rev_again_num = int(str(rev_num)[::-1])
        if num != rev_again_num:
            return False
        return True