class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        width_dict = {chr(97 + i): widths[i] for i in range(26)}
        total_width = 0
        lines = 1
        for char in s:
            char_width = width_dict[char]
            if total_width + char_width > 100:
                lines += 1
                total_width = char_width
            else:
                total_width += char_width
        return [lines, total_width]