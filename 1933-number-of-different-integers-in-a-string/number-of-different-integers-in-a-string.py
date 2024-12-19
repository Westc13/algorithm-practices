class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        modified_word = re.sub(r'[a-z]', ' ', word)
        integers = modified_word.split()
        unique_integers = {int(num) for num in integers}
        return len(unique_integers)