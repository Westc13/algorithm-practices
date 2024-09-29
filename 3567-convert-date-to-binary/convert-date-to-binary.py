class Solution:
    def convertDateToBinary(self, date: str) -> str:
        # date = list(date.split('-'))
        # for i in range(len(date)):
        #     date[i] = bin(int(date[i]))[2:]
        # return '-'.join(date)

        parts = date.split('-')
        binary_parts = [bin(int(part))[2:] for part in parts]
        return '-'.join(binary_parts)