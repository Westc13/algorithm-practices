class Solution:
    def countTime(self, time: str) -> int:
        
        hour_choices = 1
        minute_choices = 1

       
        if time[0] == '?' and time[1] == '?':
            
            hour_choices = 24
        elif time[0] == '?':
            
            if '0' <= time[1] <= '3':  
                hour_choices = 3
            else:                       
                hour_choices = 2
        elif time[1] == '?':
           
            if time[0] == '2':         
                hour_choices = 4
            else:                       
                hour_choices = 10

       
        if time[3] == '?' and time[4] == '?':
            
            minute_choices = 60
        elif time[3] == '?':
           
            minute_choices = 6  
        elif time[4] == '?':
           
            minute_choices = 10  
        return hour_choices * minute_choices
