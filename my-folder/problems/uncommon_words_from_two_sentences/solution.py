class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        result = set()
        s1_set = set(s1.split())
        s2_set = set(s2.split())

        uncommon_in_s1 = s1_set - s2_set
        uncommon_in_s2 = s2_set - s1_set

        result.update(word for word in uncommon_in_s1 if s1.split().count(word) == 1)
        result.update(word for word in uncommon_in_s2 if s2.split().count(word) == 1)

        return list(result)

        
        # result = []
        # s1_list = Counter(s1.split())
        # s2_list = Counter(s2.split())
        # for word, count in s1_list.items():
        #     if count == 1 and word not in s2_list:
        #         result.append(word)
        # for word, count in s2_list.items():
        #     if count == 1 and word not in s1_list:
        #         result.append(word)
        # return result
        