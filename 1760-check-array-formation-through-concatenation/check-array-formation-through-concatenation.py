class Solution:
    def canFormArray(self, arr: List[int], pieces: List[List[int]]) -> bool:
        hashmap = {piece[0]: piece for piece in pieces}

        index = 0

        while index < len(arr):
            if arr[index] in hashmap:
                piece = hashmap[arr[index]]

                for num in piece:
                    if arr[index] != num:
                        return False
                    index += 1
            else:
                return False
        return True