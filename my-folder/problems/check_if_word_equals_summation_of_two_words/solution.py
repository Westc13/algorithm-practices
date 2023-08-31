class Solution:
    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
        letter_selection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
        firstWord_num_arr = []
        secondWord_num_arr = []
        targetWord_num_arr = []
        for letter in firstWord:
            firstWord_num_arr.append(letter_selection.index(letter))
        firstWord_num_arr = [str(x) for x in firstWord_num_arr]
        for letter in secondWord:
            secondWord_num_arr.append(letter_selection.index(letter))
        print(secondWord_num_arr)
        secondWord_num_arr = [str(x) for x in secondWord_num_arr]
        for letter in targetWord:
            targetWord_num_arr.append(letter_selection.index(letter))
        targetWord_num_arr = [str(x) for x in targetWord_num_arr]
        if int(''.join(secondWord_num_arr)) + int(''.join(firstWord_num_arr)) == int(''.join(targetWord_num_arr)):
            return True
        else: 
            return False
            
        