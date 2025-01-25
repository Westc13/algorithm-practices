class Solution:
    def equalFrequency(self, word: str) -> bool:
        freq = Counter(word)
        for char in list(freq.keys()):
            freq[char] -= 1
            if freq[char] == 0:
                del freq[char]
            remaining_freq = list(freq.values())

            if len(set(remaining_freq)) == 1:
                return True
            freq[char] += 1
        return False