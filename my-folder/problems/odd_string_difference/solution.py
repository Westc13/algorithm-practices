class Solution:
    def calculate_diff_arr(self, word):
        diff_arr = []
        for i in range(len(word) - 1):
            diff = ord(word[i + 1]) - ord(word[i])
            diff_arr.append(diff)
        return tuple(diff_arr)

    def oddString(self, words: List[str]) -> str:
        diff_arrs = [self.calculate_diff_arr(word) for word in words]
        counter = Counter(diff_arrs)
        majority_diff_arr = counter.most_common(1)[0][0]

        for word, diff_arr in zip(words, diff_arrs):
            if diff_arr != majority_diff_arr:
                return word

        return None


