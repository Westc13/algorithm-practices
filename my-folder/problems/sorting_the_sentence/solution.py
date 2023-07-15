class Solution:
    def sortSentence(self, s: str) -> str:
        s_words_arr = s.split()
        s_words_arr.sort(key=lambda x: int(x[-1]))
        no_num_words_arr = [word[:-1] for word in s_words_arr]
        original_s = ' '.join(no_num_words_arr)
        return original_s