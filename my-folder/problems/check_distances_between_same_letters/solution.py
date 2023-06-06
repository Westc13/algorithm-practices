class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        char_positions = {}

        for i in range(len(s)):
            char = s[i]

            if char in char_positions:
                prev_position = char_positions[char]
                expected_distance = distance[ord(char) - ord('a')]

                if i - prev_position - 1 != expected_distance:
                    return False
            char_positions[char] = i

        return True