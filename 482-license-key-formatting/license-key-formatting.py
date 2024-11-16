class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        cleaned = s.replace('-', '').upper()
        reversed_cleaned = cleaned[::-1]
        chunks = [reversed_cleaned[i:i+k] for i in range(0, len(reversed_cleaned), k)]
        formatted = '-'.join(chunks)[::-1]
        return formatted