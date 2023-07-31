class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        pairs = set()
        count = 0
        for word in words:
            reversed_word = word[::-1]
            if reversed_word in pairs:
                count +=1
                pairs.remove(reversed_word)
            else:
                pairs.add(word)
        return count
