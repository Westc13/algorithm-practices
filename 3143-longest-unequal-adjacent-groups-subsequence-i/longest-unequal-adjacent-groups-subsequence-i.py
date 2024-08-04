class Solution:
    def getLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
        n = len(words)
        dp = [1] * n
        prev = [-1] * n

        for i in range(n):
            for j in range(i + 1, n):
                if groups[i] != groups[j] and dp[i] + 1 > dp[j]:
                    dp[j] = dp[i] + 1
                    prev[j] = i
        max_length = max(dp)
        index = dp.index(max_length)

        longest_subsequence = []
        while index != -1:
            longest_subsequence.append(words[index])
            index = prev[index]

        longest_subsequence.reverse()

        return longest_subsequence