class Solution:
    def makeSmallestPalindrome(self, s: str) -> str:
        s_arr = list(s)
        left, right = 0, len(s) -1
        
        while left < right:
            if s_arr[left] == s_arr[right]:
                left += 1
                right -= 1
            elif s_arr[left] < s_arr[right]:
                s_arr[right] = s_arr[left]
                left += 1
                right -= 1
            else:
                s_arr[left] = s_arr[right]
                left += 1
                right -= 1
        return ''.join(s_arr)
        