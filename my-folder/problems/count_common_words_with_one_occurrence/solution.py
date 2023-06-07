class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        count = 0
        unique1 = { word1 for word1 in words1 if words1.count(word1) == 1}
        unique2 = { word2 for word2 in words2 if words2.count(word2) == 1}
        for word1 in unique1:
            if word1 in unique2:
                count +=1
        return count