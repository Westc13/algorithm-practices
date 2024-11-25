class Solution:
    def reorderSpaces(self, text: str) -> str:
        words = text.split()
        total_spaces = len(text) - sum(len(word) for word in words)
        if len(words) > 1:
            spaces_between = total_spaces // (len(words) - 1)
            extra_spaces = total_spaces % (len(words) - 1)
        else:
            spaces_between = 0
            extra_spaces = total_spaces

        result = (' ' * spaces_between).join(words)
        result += ' ' * extra_spaces
        return result