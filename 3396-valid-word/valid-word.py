class Solution:
    def isValid(self, word: str) -> bool:
        if len(word) < 3:
            return False

        if not re.fullmatch(r'[A-Za-z0-9]+', word):
            return False

        if not re.search(r'[aeiouAEIOU]', word):
            return False
        
        if not re.search(r'[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]', word):
            return False
        return True