class Solution:
    def stringSequence(self, target: str) -> List[str]:
        result = []
        screen = ''

        for c in target:
            screen += 'a'
            result.append(screen)

            while screen[-1] != c:
                next_char = chr((ord(screen[-1]) - ord('a') + 1) % 26 + ord('a'))
                screen = screen[:-1] + next_char
                result.append(screen)
        return result