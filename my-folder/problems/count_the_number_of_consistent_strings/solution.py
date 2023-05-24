class Solution(object):
    def countConsistentStrings(self, allowed, words):
        # convert allowed string to a set
        allowed_set = set(allowed)
        # initiate a counter to keep track of consistent strings
        count = 0

        for word in words:
            consistent = True 

            for char in word:
                if char not in allowed_set:
                    consistent = False
                    break
            if consistent:
                count += 1
        return count
        """
        :type allowed: str
        :type words: List[str]
        :rtype: int
        """