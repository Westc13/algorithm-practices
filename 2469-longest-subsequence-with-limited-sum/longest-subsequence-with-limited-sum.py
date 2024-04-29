class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        answer = []

        for query in queries:
            sum_ = 0
            max_size = 0

            for num in nums:
                if sum_ + num > query:
                    break
                sum_ += num
                max_size += 1
            answer.append(max_size)
        return answer