class Solution:
    def closetTarget(self, words: List[str], target: str, startIndex: int) -> int:
        def find_target_indices(words, target):
            target_indices = []
            for index, word in enumerate(words):
                if word == target:
                    target_indices.append(index)
            return target_indices
        def calculate_min_distances(n, start, target):
            clockwise = (target - start) % n
            counter_clockwise = (start - target) % n
            return min(clockwise, counter_clockwise)

        n = len(words)
        target_indices = find_target_indices(words, target)

        if not target_indices:
            return -1
        min_distance = float('inf')

        for target_index in target_indices:
            distance = calculate_min_distances(n, startIndex, target_index)
            if distance < min_distance:
                min_distance = distance
        return min_distance   