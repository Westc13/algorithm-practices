class Solution:
    def maxFreqSum(self, s: str) -> int:
        vowel_max = 0
        consonant_max = 0
        vowels = {'a', 'e', 'i', 'o', 'u'}

        freqs = Counter(s)
        for c, f in freqs.items():
            if c in vowels and f > vowel_max:
                vowel_max = f
            if c not in vowels and f > consonant_max:
                consonant_max = f
        res = vowel_max + consonant_max
        return res