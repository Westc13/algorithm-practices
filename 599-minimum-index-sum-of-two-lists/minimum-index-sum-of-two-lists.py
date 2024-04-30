class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        idx_dict = {word: i for i, word in enumerate(list1)}
        min_idx_sum = float('inf')
        common_strs = []

        for j, word in enumerate(list2):
            if word in idx_dict:
                idx_sum = j + idx_dict[word]

                if idx_sum < min_idx_sum:
                    min_idx_sum = idx_sum
                    common_strs = [word]
                elif idx_sum == min_idx_sum:
                    common_strs.append(word)
        return common_strs