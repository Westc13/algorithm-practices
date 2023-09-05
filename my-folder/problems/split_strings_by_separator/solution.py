class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        splited = []
        for word in words:
            splited.extend(word.split(separator))
            result = [i for i in splited if i != '']
        return result
        