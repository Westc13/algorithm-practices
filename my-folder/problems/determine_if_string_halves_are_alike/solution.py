class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = ['a', 'e', 'i', 'o', 'u']
        a = [*s[: int(len(s)/2)].lower()]
        b = [*s[int(len(s)/2):].lower()]
        count_a = 0
        count_b = 0
        for x in a:
            if x in vowels:
                count_a += 1
        for y in b:
            if y in vowels:
                count_b += 1
        if count_a == count_b:
            return True
        return False
        
