class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        first_letters = []
        for word in words:
            first_letters.append(word[0])
        if ''.join(first_letters) == s:
            return True
        return False