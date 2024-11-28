class Solution:
    def findMinimumOperations(self, s1: str, s2: str, s3: str) -> int:
        def common_prefix(s1, s2, s3):
            length = 0
            while length < len(s1) and length < len(s2) and length < len(s3) and s1[length] == s2[length] == s3[length]:
                length += 1
            return length
        common_len = common_prefix(s1, s2, s3)

        if common_len == 0 and (s1[0] != s2[0] or s2[0] != s3[0] or s1[0] != s3[0]):
            return -1
        deletions = (len(s1) - common_len) + (len(s2) - common_len) + (len(s3) - common_len)
        return deletions