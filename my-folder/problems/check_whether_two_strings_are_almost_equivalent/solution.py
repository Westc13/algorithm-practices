class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        count_diff = 0
        letter_counts = {}

        for char in word1:
            letter_counts[char] = letter_counts.get(char, 0) + 1
        for char in word2:
            letter_counts[char] = letter_counts.get(char, 0) - 1

        for count in letter_counts.values():
            if abs(count) > 3:
                return False
        return True
        
        # word1_count = Counter(word1)
        # word2_count = Counter(word2)
        # for el in word1_count:
        #     if el not in word2_count:
        #         word2_count[el] = 0
        #     if abs(word1_count[el] - word2_count[el]) > 3:
        #         return False
        # for el in word2_count:
        #     if el not in word1_count:
        #         if word2_count[el] > 3:
        #             return False  
        # return True