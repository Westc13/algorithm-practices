class Solution:
    def sortVowels(self, s: str) -> str:
        vowels = set('aeiouAEIOU')
        s_list = list(s)

        vowel_positions = [(i, ch) for i, ch in enumerate(s) if ch in vowels]
        sorted_vowels = sorted([ch for _, ch in vowel_positions])

        for (i, _), ch in zip(vowel_positions, sorted_vowels):
            s_list[i] = ch
        return ''.join(s_list)