class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        current_w_count = blocks[:k].count('W')
        min_operations = current_w_count

        for i in range(1, len(blocks) - k + 1):
            if blocks[i - 1] == 'W':
                current_w_count -= 1
            if blocks[i + k - 1] == 'W':
                current_w_count += 1
            min_operations = min(min_operations, current_w_count)
        return min_operations