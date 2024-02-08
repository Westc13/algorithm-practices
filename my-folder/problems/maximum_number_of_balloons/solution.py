class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        text_freq = Counter(text)
        balloon_freq = Counter('balloon')
        instance = min(text_freq[char] // balloon_freq[char] for char in balloon_freq)
        return instance
        