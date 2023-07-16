class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return len(set(sentence)) == 26

        # alphabet = "abcdefghijklmnopqrstuvwxyz"
        # for letter in alphabet:
        #     if letter not in sentence:
        #         return False
            
        # return True
     
       
