class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        only_letters = ''.join([i for i in licensePlate if not i.isdigit()]).replace(' ', '').lower()
        possibles = []
        for word in words:
            if all(word.count(letter)>= only_letters.count(letter) for letter in only_letters):
                possibles.append(word)
        possibles.sort(key=len)
        return possibles[0]       