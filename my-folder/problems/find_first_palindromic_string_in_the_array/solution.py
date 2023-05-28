class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        result = ''
        for word in words:
            if word == "".join(reversed(word)):
                result = word
                break
        return result