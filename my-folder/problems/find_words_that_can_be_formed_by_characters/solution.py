class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        chars_count = Counter(chars)
        result = 0

        for word in words:
            word_count = Counter(word)
            if all(word_count[char] <= chars_count[char] for char in word_count):
                result += len(word)

        return result