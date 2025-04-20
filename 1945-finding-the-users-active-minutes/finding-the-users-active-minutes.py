class Solution:
    def findingUsersActiveMinutes(self, logs: List[List[int]], k: int) -> List[int]:
        user_minutes = defaultdict(set)

        for user_id, time in logs:
            user_minutes[user_id].add(time)
        
        answer = [0] * k
        for times in user_minutes.values():
            uam = len(times)
            if 1 <= uam <= k:
                answer[uam - 1] += 1
        return answer