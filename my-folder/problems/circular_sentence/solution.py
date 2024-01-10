class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        s_list = sentence.split()
        if len(s_list) == 1 and s_list[0][-1] == s_list[0][0]:
            return True
        else: 
            # for i in range(len(s_list) - 1):
            #     if s_list[i][-1] == s_list[i+1][0] and s_list[-1][-1] == s_list[0][0]:
            #       return True
            for i in range(len(s_list)):
                if s_list[i][-1] != s_list[(i+1) % len(s_list)][0]:
                    return False
        
        return True
        