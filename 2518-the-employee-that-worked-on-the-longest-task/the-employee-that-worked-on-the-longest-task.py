class Solution:
    def hardestWorker(self, n: int, logs: List[List[int]]) -> int:
        max_time = 0
        result_id = None
        previous_time = 0

        for log in logs:
            employee_id, leave_time = log
            duration = leave_time - previous_time

            if duration > max_time:
                max_time = duration
                result_id = employee_id
            elif duration == max_time:
                result_id = min(result_id, employee_id)
            previous_time = leave_time
        return result_id