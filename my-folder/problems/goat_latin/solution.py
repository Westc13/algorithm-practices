class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        word_arr = sentence.split(' ')
        result = []
        for i, word in enumerate(word_arr, start=1):
            if word[0].lower() in ['a', 'e', 'i', 'o', 'u']:
                word += 'ma'
            else:
                first_char = word[0]
                word = word[1:] + first_char + 'ma'
            word += 'a' * i

            result.append(word)
        return ' '.join(result)
        