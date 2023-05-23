class Solution(object):
    def truncateSentence(self, s, k):
        words = s.split()
        truncated_words=words[:k]
        truncatedSentence = " ".join(truncated_words)
        return truncatedSentence
        """
        :type s: str
        :type k: int
        :rtype: str
        """