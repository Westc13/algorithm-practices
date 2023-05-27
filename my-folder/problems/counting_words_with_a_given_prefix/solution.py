class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        count = 0
        for word in words:
            word_pref = word[0 : len(pref)]
            if word_pref == pref:
                count += 1
        return count
