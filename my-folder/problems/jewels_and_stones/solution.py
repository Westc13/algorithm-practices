class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        jewels_map = {}
        
        for jewel in jewels:
            jewels_map[jewel] = 1
        
        count = 0

        for stone in stones:
            if stone in jewels_map:
                count +=1
        
        return count
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """