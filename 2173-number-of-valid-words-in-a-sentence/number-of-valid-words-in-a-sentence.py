class Solution:
    def countValidWords(self, sentence: str) -> int:
        tokens = sentence.split()

        pattern = re.compile(r'^[a-z]*([a-z]-[a-z])?[a-z]*[!.,]?$')

        valid_count = 0

        for token in tokens:
            if any(char.isdigit() for char in token):
                continue
            if pattern.match(token):
                valid_count += 1
        return valid_count