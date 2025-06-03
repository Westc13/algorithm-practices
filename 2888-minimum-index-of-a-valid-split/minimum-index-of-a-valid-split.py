class Solution:
    def minimumIndex(self, nums: List[int]) -> int:
        n = len(nums)
        total_count = Counter(nums)

        dom, total_dom_count = max(total_count.items(), key=lambda x: x[1])

        left_dom_count = 0

        for i in range(n - 1):
            if nums[i] == dom:
                left_dom_count += 1

            left_size = i + 1
            right_size = n - left_size
            right_dom_count = total_dom_count - left_dom_count
            if left_dom_count * 2 > left_size and right_dom_count * 2 > right_size:
                return i
        return -1