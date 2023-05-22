class Solution(object):
    def countMatches(self, items, ruleKey, ruleValue):
        count = 0
        for item in items:
            if ruleKey == "type" and item[0] == ruleValue:
                count +=1
            elif ruleKey == "color" and item[1] == ruleValue:
                count +=1
            elif ruleKey == "name" and item[2] == ruleValue:
                count +=1
        return count
        """
        :type items: List[List[str]]
        :type ruleKey: str
        :type ruleValue: str
        :rtype: int
        """
