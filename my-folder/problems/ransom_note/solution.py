class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransom_counts = Counter(ransomNote)
        magazine_counts = Counter(magazine)
        for char, count in ransom_counts.items():
            if char not in magazine_counts or count > magazine_counts[char]:
                return False
        return True
        