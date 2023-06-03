class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        counter = Counter(arr)
        for str in arr:
            if counter[str] == 1:
                k -= 1
                if k == 0:
                    return str
        return ""
        