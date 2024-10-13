class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        n = len(nums)
        answer = []

        for i in range(n - k + 1):
            window = nums[i:i + k]
            counts = Counter(window)
            sorted_elements = sorted(counts.items(), key=lambda item: (-item[1], -item[0]))

            top_x_elements = set()

            for j in range(min(x, len(sorted_elements))):
                top_x_elements.add(sorted_elements[j][0])
            window_sum = sum(num for num in window if num in top_x_elements)

            answer.append(window_sum)
        return answer