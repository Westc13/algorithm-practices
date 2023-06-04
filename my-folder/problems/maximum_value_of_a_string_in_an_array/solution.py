class Solution:
    def maximumValue(self, strs: List[str]) -> int:
        previous_value = -sys.maxsize -1

        for str in strs:
            if str.isnumeric():
                current_value = int(str)
                if current_value > previous_value:
                    previous_value = current_value
            else:
                current_value = len(str)
                if current_value > previous_value:
                    previous_value = current_value
        return previous_value