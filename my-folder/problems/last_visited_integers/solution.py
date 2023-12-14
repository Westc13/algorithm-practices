class Solution:
    def lastVisitedIntegers(self, words: List[str]) -> List[int]:
        result = []
        stack = []
        k = 0
        for word in words:
            if word == 'prev':
                if k < len(stack):
                    result.append(int(stack[len(stack) - k - 1]))
                else:
                    result.append(-1)
                k += 1
            else:
                if word.isnumeric():
                    stack.append(word)
                k = 0
        return result