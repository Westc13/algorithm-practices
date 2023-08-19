class Solution:
    def generateTheString(self, n: int) -> str:
        alphabets = list(string.ascii_lowercase)
        result_arr = []
        random_chars = list(random.sample(alphabets, 2))
        if n % 2 != 0:
            result_arr.append(random_chars[0] * n)
        else:
            result_arr.append(random_chars[0] * (n-1))
            result_arr.append(random_chars[1])
        return ''.join(result_arr)
    

            